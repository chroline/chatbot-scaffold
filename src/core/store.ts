import { create } from "zustand";

import Chat from "~/util/models/Chat";

import { askBot } from "./actions";

interface Store {
  apiKey: string | null;
  chats: Chat[];
  sendChat: (message: string) => void;
  clearChat: () => void;
}

const useStore = create<Store>((set, get) => ({
  apiKey: localStorage.getItem("apiKey"),
  setApiKey(apiKey: string) {
    localStorage.setItem("apiKey", apiKey);
    set(state => ({ ...state, apiKey }));
  },
  chats: [],
  sendChat(message: string) {
    const newChat = new Chat({ from: "user", message });
    set(state => ({
      chats: [
        ...state.chats,
        newChat,
        askBot({
          apiKey: get().apiKey as string,
          query: message,
          history: get().chats.map(chat => ({ from: chat.from, msg: chat.mainMessage || "" })),
        }),
      ],
    }));
  },
  clearChat() {
    set(() => ({ chats: [] }));
  },
}));

export default useStore;
