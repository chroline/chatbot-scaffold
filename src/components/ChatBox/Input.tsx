import { Input, InputTypeMap } from "@mui/joy";

export const ChatBoxInput = (props: InputTypeMap["props"]) => (
  <Input
    sx={{
      width: "100%",
      marginRight: 2,
    }}
    size="lg"
    placeholder="Type your query here..."
    variant="plain"
    required
    {...props}
  />
);
