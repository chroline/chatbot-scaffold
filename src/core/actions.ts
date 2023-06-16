import { filter } from "rxjs";

import { queryBot } from "~/api";
import Chat, { ChatFrom } from "~/util/models/Chat";

export function askBot({
  apiKey,
  query,
  history,
}: {
  apiKey: string;
  query: string;
  history: { from: ChatFrom; msg: string }[];
}) {
  const newChat = new Chat({ from: "bot" });

  queryBot({ apiKey, query, history })
    .pipe(
      filter(value => {
        if (typeof value === "string") {
          newChat.mainMessage = value;
          return false;
        }
        return true;
      })
    )
    .subscribe({
      next: value => {
        newChat.messages$.next(value as string[]);
      },
      error: value => {
        newChat.messages$.error("");
        newChat.messages$.complete();
      },
      complete: () => {
        newChat.messages$.complete();
      },
    });

  return newChat;
}
