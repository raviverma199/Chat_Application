import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import UserSendMessage from "../hooks/userSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMesage  } = UserSendMessage();
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMesage(message);
    setMessage("");
  };

  return (
    <form action="" className="px-4 my-3" onSubmit={handlesubmit}>
      <div className="relative w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white pr-12" // Adjusted padding for the button space
          placeholder="Type a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center text-white"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend size={20} />
          )}
        </button>
      </div>
    </form>
  );
}
