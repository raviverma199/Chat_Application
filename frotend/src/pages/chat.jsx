import React, { useState, useEffect, useMemo } from 'react';
import { FaSmile, FaPaperPlane } from 'react-icons/fa'; // Removed the FaCheck icon
import image_1 from "../Assests/images/img-2.avif";
import { io } from 'socket.io-client';

const ChatApp = () => {

  const socket = useMemo(() => io('http://localhost:2020'), []);

  useEffect(() => {
  socket.on('connect', () => {
    console.log('connect')
    console.log(socket.id)
  })

  socket.on("welcome", (s) => {
    console.log(s)
  })
  }, [])

  const [messages, setMessages] = useState([
    { text: 'Hi! How are you?', from: 'user1', time: '10:00 AM' },
    { text: 'I am good, thanks! And you?', from: 'user2', time: '10:05 AM' },
  ]);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    // if (input.trim()) {
    //   const newMessage = { text: input, from: 'user1', time: new Date().toLocaleTimeString() };
    //   setMessages([...messages, newMessage]);
    //   setInput('');
    // } 

    e.preventDefault();
    socket.emit("message", (message) => {
      console.log(message)
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between bg-teal-500 text-white p-6 rounded-t-3xl shadow-md">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110"
            />
            <span className="text-2xl font-semibold tracking-wide">Chat Room</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-white">
            <div className="text-green-500 text-xs animate-pulse">•</div>
            <span>Online</span>
          </div>
        </div>

        {/* Messages Area */}
        <div
          className="h-96 overflow-y-auto p-6 space-y-4 bg-cover bg-center"
          style={{ backgroundImage: {image_1} }} // Background image URL
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === 'user1' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs p-4 rounded-lg text-sm transition-all transform ${
                  msg.from === 'user1'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800'
                } hover:scale-105 relative`}
              >
                {msg.text}
                <div
                  className={`text-xs mt-2 flex justify-between items-center ${
                    msg.from === 'user1' ? 'text-right' : 'text-left'
                  }`}
                >
                  <span>{msg.time}</span>
                </div>
                
                {/* Add image to message bubble */}
                {msg.from === 'user1' && (
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg opacity-20"
                    style={{ backgroundImage: {} }} // Background image inside the bubble
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Area */}
        <div className="flex items-center p-4 bg-gray-50 border-t-2 border-gray-200 rounded-b-3xl shadow-sm">
          <button className="text-teal-500 p-2 mr-3 hover:text-teal-600 transition-all transform hover:scale-110">
            <FaSmile />
          </button>
          <input
            type="text"
            className="w-full py-3 px-5 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm placeholder-gray-500"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-teal-500 text-white py-3 px-6 rounded-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all transform hover:scale-110"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
