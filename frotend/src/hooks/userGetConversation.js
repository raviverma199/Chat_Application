import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UserGetConversation = () => {
  const [loading, setLoading] = useState(null);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const GetConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/user/getsidebaruser");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    GetConversation();
  }, []);
  return { loading, conversations };
};

export default UserGetConversation;
