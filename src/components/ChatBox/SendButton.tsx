import { SendRounded } from "@mui/icons-material";
import { Button, ButtonTypeMap } from "@mui/joy";

export const ChatBoxSendButton = (props: ButtonTypeMap["props"]) => (
  <Button
    variant="solid"
    color="primary"
    type="submit"
    sx={() => ({ minHeight: "100%", flexShrink: 0 })}
    startDecorator={<SendRounded />}
    {...props}
  >
    Send
  </Button>
);
