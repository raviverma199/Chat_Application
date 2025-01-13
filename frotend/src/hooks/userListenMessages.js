import { useEffect } from "react";
import { UseSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";
import NotificationSound from "../Assests/sound/notification.mp3"

const UserListenMessages = () => {
  const { socket } = UseSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(NotificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default UserListenMessages;
