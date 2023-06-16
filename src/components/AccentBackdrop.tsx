import { styled } from "@mui/joy";

export const AccentBackdrop = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? theme.palette.primary[500] : theme.palette.primary[600],
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
