import { styled } from "@mui/joy";

export const ChatWindowInputArea = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.mode === "light" ? theme.palette.neutral[100] : theme.palette.neutral[800],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px solid ${theme.palette.neutral.outlinedBorder}`,

  padding: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));
