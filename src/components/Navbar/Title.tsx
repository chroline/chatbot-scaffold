import { styled } from "@mui/joy";

export const NavbarTitle = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  [theme.breakpoints.down("md")]: { display: "none" },
}));
