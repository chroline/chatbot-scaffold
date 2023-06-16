import { Subject } from "rxjs";

import { ChatFrom } from "~/util/models/Chat";

type QueryBotProps = {
  apiKey: string;
  query: string;
  history: { from: ChatFrom; msg: string }[];
};

export function queryBot(_props: QueryBotProps): Subject<string | string[]> {
  // TODO: implement connection to chatbot server
  throw Error("TODO");
}
