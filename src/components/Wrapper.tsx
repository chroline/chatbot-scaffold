import { styled } from "@mui/joy";

export const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.body,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
