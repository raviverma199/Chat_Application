import React from "react";
import { BsSend } from "react-icons/bs";

export default function MessageInput() {
  return (
    <form action="" className="px-4 my-3">
    <div className="relative w-full">
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white pr-12" // Adjusted padding for the button space
        placeholder="Type a Message"
      />
  
      <button
        type="submit"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center text-white"
      >
        <BsSend size={20} />
      </button>
    </div>
  </form>
  
  );
}
