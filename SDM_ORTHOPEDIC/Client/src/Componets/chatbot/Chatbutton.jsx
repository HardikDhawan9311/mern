import React, { useState } from 'react';
import Chatbot from './Bot'; // Assuming the Chatbot component is in the same directory

const ChatbotButton = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="group fixed bottom-4 right-4 z-50">
        <button onClick={toggleChatbot} className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
          <div className="rounded-full bg-white p-2">
            <svg
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              height="44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
              fill="none"
            >
              <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
              <path d="M8 9h8"></path>
              <path d="M8 13h6"></path>
              <path
                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
              ></path>
            </svg>
          </div>
        </button>
        <span
          className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
        >
          Chat 
        </span>
      </div>

      {isChatbotOpen && (
        <div className="fixed bottom-16 right-4 z-50 w-full max-w-sm">
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
