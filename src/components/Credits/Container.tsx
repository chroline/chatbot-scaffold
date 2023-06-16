import { styled } from "@mui/joy";

export const CreditsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  padding: `${theme.spacing(2)} 0`,

  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.mode === "light" ? theme.palette.neutral[100] : theme.palette.neutral[800],
  },
}));
