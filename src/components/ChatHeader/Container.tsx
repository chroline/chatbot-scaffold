import { styled } from "@mui/joy";

export const ChatHeaderContainer = styled("div")(({ theme }) => ({
  boxShadow: theme.shadow.sm,
  backgroundColor: theme.palette.mode === "light" ? theme.palette.neutral[100] : theme.palette.neutral[800],
  width: "100%",
  position: "relative",
  zIndex: 1,
  borderBottom: `1px solid ${theme.palette.neutral.outlinedBorder}`,
  display: "flex",
  alignItems: "center",

  marginTop: theme.spacing(6),
  maxWidth: theme.breakpoints.values["md"],
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
    maxWidth: theme.breakpoints.values["sm"],
  },

  height: theme.spacing(12),
  padding: `0 ${theme.spacing(3)}`,
  borderTopLeftRadius: theme.radius.sm,
  borderTopRightRadius: theme.radius.sm,
  [theme.breakpoints.down("sm")]: {
    height: theme.spacing(11),
    padding: `0 ${theme.spacing(2)}`,
    marginTop: 0,
    borderRadius: 0,
  },
}));
