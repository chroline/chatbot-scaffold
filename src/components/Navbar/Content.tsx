import { Sheet, styled } from "@mui/joy";

export const NavbarContent = styled(Sheet)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values["md"],
  backgroundColor: "transparent",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
