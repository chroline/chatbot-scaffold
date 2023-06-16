import { Sheet, SheetTypeMap } from "@mui/joy";

export const ChatMessageItem = (props: SheetTypeMap<{ from: "user" | "bot" }>["props"]) => (
  <Sheet
    {...props}
    sx={theme => ({
      padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
      maxWidth: theme.breakpoints.values["sm"],
      paddingY: 0,

      ...(props.from === "user" ? { borderRadius: theme.radius.sm } : {}),

      ...(props.from === "bot"
        ? {
            background: "transparent",
            borderLeft: `2px solid currentColor`,
          }
        : {}),

      ...(props.sx as object),
    })}
  />
);
