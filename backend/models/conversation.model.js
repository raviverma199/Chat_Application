import mongoose from "mongoose";

let ConversionModel = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversationmodel = mongoose.model("Conversation", ConversionModel);

export default conversationmodel;
