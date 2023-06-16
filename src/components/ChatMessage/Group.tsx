import { Box, Theme, styled } from "@mui/joy";
import { BoxTypeMap } from "@mui/system";

export const ChatMessageGroup = (props: BoxTypeMap<{ from: "user" | "bot" }, "div", Theme>["props"]) => (
  <Box
    {...props}
    sx={theme => ({
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(2),

      alignItems: props.from === "user" ? "end" : "start",
      paddingLeft: props.from === "user" ? 6 : 0,
      paddingRight: props.from === "user" ? 0 : 6,

      ...(props.sx as object),
    })}
  />
);

styled("div")();
