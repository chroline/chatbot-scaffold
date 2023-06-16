import useStore from "~/core/store";
import useIsSubscriptionClosed from "~/util/hooks/useObservableIsComplete";

import { ChatBoxContainer } from "./Container";
import { ChatBoxInput } from "./Input";
import { ChatBoxSendButton } from "./SendButton";

export const ChatBox = () => {
  const store = useStore();

  const mostRecentChat = [...store.chats].pop();
  const isMostRecentChatClosed = useIsSubscriptionClosed(mostRecentChat?.messages$);

  const isDisabled = mostRecentChat && (!isMostRecentChatClosed || mostRecentChat.from === "user");

  return (
    <ChatBoxContainer
      onSubmit={event => {
        event.preventDefault();
        const input = (event.target as unknown as { input: HTMLInputElement }).input;
        const query = input.value;
        input.value = "";
        store.sendChat(query);
      }}
    >
      <ChatBoxInput name="input" disabled={isDisabled} />
      <ChatBoxSendButton disabled={isDisabled} />
    </ChatBoxContainer>
  );
};
