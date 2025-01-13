// zustand store (useConversation.js)
import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null, // Initially null
  setSelectedConversation: (conversation) => {
    set({ selectedConversation: conversation });
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
