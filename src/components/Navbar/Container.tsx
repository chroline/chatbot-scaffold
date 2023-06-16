import { styled } from "@mui/joy";

export const NavbarContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? theme.palette.primary[600] : theme.palette.primary[700],
  width: "100%",
  height: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
