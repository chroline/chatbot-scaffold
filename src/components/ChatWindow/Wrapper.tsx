import { styled } from "@mui/joy";

export const ChatWindowWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.surface,
  width: "100%",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  overflow: "hidden",

  maxWidth: theme.breakpoints.values["md"],
  [theme.breakpoints.down("md")]: {
    maxWidth: theme.breakpoints.values["sm"],
  },

  boxShadow: theme.shadow.md,
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
  },
}));
