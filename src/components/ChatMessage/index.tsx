import { CircularProgress, Link, Typography } from "@mui/joy";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Subject } from "rxjs";

import useObservable from "~/util/hooks/useObservable";
import useObservableHasError from "~/util/hooks/useObservableHasError";
import useObservableIsComplete from "~/util/hooks/useObservableIsComplete";

import { ChatMessageGroup } from "./Group";
import { ChatMessageItem } from "./Item";

export const ChatMessage = ({ from, messages$ }: { from: "user" | "bot"; messages$: Subject<string[]> }) => {
  const messages = useObservable(messages$, []);

  const isClosed = useObservableIsComplete(messages$);
  const hasError = useObservableHasError(messages$);

  return (
    <ChatMessageGroup from={from}>
      <Typography level="body3" sx={{ my: 1 }}>
        From: {from}
      </Typography>
      {(messages || []).map((message, i) => (
        <ChatMessageItem
          key={i}
          from={from}
          color={hasError ? "danger" : "neutral"}
          variant={from === "user" ? "soft" : "plain"}
        >
          <ReactMarkdown
            children={message}
            remarkPlugins={[remarkGfm]}
            components={{
              p: props => (
                <Typography sx={{ whiteSpace: "pre-line", color: "inherit", marginY: 1 }} {...(props as object)} />
              ),
              li: props => (
                <Typography
                  component={"li"}
                  sx={{ color: "inherit", my: 1, display: "list-item" }}
                  {...(props as object)}
                />
              ),
              a: props => <Link variant="soft" href={""} {...(props as object)} />,
            }}
          />
        </ChatMessageItem>
      ))}
      {hasError && (
        <ChatMessageItem
          from={from}
          color={hasError ? "danger" : "neutral"}
          variant={from === "user" ? "soft" : "plain"}
        >
          <Typography sx={{ whiteSpace: "pre-line", color: "inherit" }}>
            Whoops, an error occured while generating this response.
          </Typography>
        </ChatMessageItem>
      )}
      {from === "bot" && !isClosed && !hasError && (
        <ChatMessageItem from={from} color={"neutral"} variant={"plain"}>
          <CircularProgress color="neutral" determinate={false} size="sm" />
        </ChatMessageItem>
      )}
    </ChatMessageGroup>
  );
};
