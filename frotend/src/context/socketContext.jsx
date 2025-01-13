import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const UseSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socketInstance = io("http://localhost:2020", {
        query: { userId: authUser?._id },
      });

      setSocket(socketInstance);

      // Listening to the "getOnlineUsers" event from the server
      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Clean up on component unmount or user change
      return () => socketInstance.close();
    } else {
      // If no authUser, close the socket
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
