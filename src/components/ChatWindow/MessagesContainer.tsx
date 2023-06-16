import { styled } from "@mui/joy";

export const ChatWindowMessagesContainer = styled("div")(({ theme }) => ({
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  overflow: "scroll",

  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },

  "> div": { display: "flex", flexDirection: "column", flex: 1 },
}));
