import React from "react";
import Conversation from "./conversation";
import UserGetConversation from "../hooks/userGetConversation";

export default function conversations() {
  const { loading, conversations } = UserGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversation.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}
