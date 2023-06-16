import { create } from "zustand";

import Chat from "~/util/models/Chat";

import { askBot } from "./actions";

interface ChatStore {
  chats: Chat[];
  sendChat: (message: string) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: [],
  sendChat(message: string) {
    const newChat = new Chat({ from: "user", message });
    set(state => ({
      chats: [
        ...state.chats,
        newChat,
        askBot({
          apiKey: useApiKeyStore.getState().apiKey as string,
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

interface ApiKeyStore {
  apiKey: string | null;
  setApiKey: (apiKey: string) => void;
}

export const useApiKeyStore = create<ApiKeyStore>(set => ({
  apiKey: localStorage.getItem("apiKey"),
  setApiKey(apiKey: string) {
    localStorage.setItem("apiKey", apiKey);
    set(state => ({ ...state, apiKey }));
  },
}));
