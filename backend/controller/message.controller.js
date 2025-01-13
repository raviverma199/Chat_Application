import { SendErrorResponse } from "../utils/helper.js";
import MessageSchema from "../models/message.model.js";
import conversationmodel from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

// Controller to Send the Message
export const SendMessage = async (req, res) => {
  try {
    ("hit api");
    let { id: receiverId } = req.params;
    let { message } = req.body;
    const senderId = req.user._id;

    let CreateConversation = await conversationmodel.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // if conversation not exist create conversation
    if (!CreateConversation) {
      CreateConversation = await conversationmodel.create({
        participants: [senderId, receiverId],
      });
    }

    // create new message
    let newMessage = new MessageSchema({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      CreateConversation.messages.push(newMessage._id);
    }

    // this will run in parallel
    await Promise.all([CreateConversation.save(), newMessage.save()]);

    // Socket Logics
    const receiverSocketId = await getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    error;
    return SendErrorResponse(
      false,
      res,
      `Internal server Error: ${error}`,
      500
    );
  }
};

// Controller to Get the Message between two user
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await conversationmodel
      .findOne({
        participants: { $all: [senderId, userToChatId] },
      })
      .populate("messages"); // not reference but actual message

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    return SendErrorResponse(
      false,
      res,
      `Internal server Error: ${error}`,
      500
    );
  }
};
