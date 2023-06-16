import { styled } from "@mui/joy";

export const EmptyStateContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.neutral.plainDisabledColor,
}));
