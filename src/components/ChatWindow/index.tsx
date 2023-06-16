import { Box } from "@mui/joy";

import { useChatStore } from "~/core/store";

import { ChatBox } from "../ChatBox";
import { ChatMessage } from "../ChatMessage";
import { EmptyState } from "../EmptyState";
import { ChatWindowMessagesContainer } from "./MessagesContainer";
import { ChatWindowWrapper } from "./Wrapper";

export const ChatWindow = () => {
  const { chats } = useChatStore();

  return (
    <ChatWindowWrapper>
      <ChatWindowMessagesContainer>
        <Box>
          {chats.length === 0 ? (
            <EmptyState />
          ) : (
            chats.map((chat, i) => <ChatMessage key={i} from={chat.from} messages$={chat.messages$} />)
          )}
        </Box>
      </ChatWindowMessagesContainer>
      <ChatBox />
    </ChatWindowWrapper>
  );
};
