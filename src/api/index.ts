import { Subject, filter, map } from "rxjs";
import { webSocket } from "rxjs/webSocket";

import { ChatFrom } from "~/util/models/Chat";

import { NO_SOURCES_INFO_COPIES, QUERY_URL, generateRandomCopyText } from "./constants";

export function queryBot({
  apiKey,
  query,
  history,
}: {
  apiKey: string;
  query: string;
  history: { from: ChatFrom; msg: string }[];
}): Subject<string | string[]> {
  const webSocket$ = webSocket({ url: QUERY_URL });
  const data$ = new Subject<string | string[]>();

  let messages: string[] = [];
  let sources: string[] = [];

  const noSourcesInfoCopy = generateRandomCopyText(NO_SOURCES_INFO_COPIES);

  webSocket$
    .pipe(
      map(jsonString => jsonString as { type: "sources" | "response"; data: string | string[] }),
      filter(value => {
        if (value.type === "sources") {
          sources = value.data as string[];
          if (sources.length === 0) {
            messages = [noSourcesInfoCopy];
            data$.next(messages);
          }
          return false;
        }
        return true;
      })
    )
    .subscribe({
      next: value => {
        const newMessages = [sources.length === 0 && noSourcesInfoCopy, value.data as string];
        messages = newMessages.filter(v => v !== false) as string[];
        data$.next(messages);
      },
      error: error => {
        data$.error(error);
      },
      complete: () => {
        data$.next(messages[messages.length - 1]);
        if (sources.length > 0) data$.next([...messages, `**Read more**:\n\n${sources.join("\n\n")}`]);
        data$.complete();
      },
    });

  webSocket$.next({
    apiKey,
    query,
    history: [...history].slice(-2),
  });

  return data$;
}
