import { Box, Typography } from "@mui/joy";

import { ChatHeaderButtons } from "./Buttons";
import { ChatHeaderContainer } from "./Container";

export const ChatHeader = () => {
  return (
    <ChatHeaderContainer>
      <Box sx={{ flex: 1 }}>
        <Typography level="body2" sx={{ textTransform: "uppercase" }}>
          Chatting with...
        </Typography>
        <Typography component="h1" level="h4" fontWeight="600">
          Chatbot Scaffold
        </Typography>
      </Box>
      <ChatHeaderButtons />
    </ChatHeaderContainer>
  );
};
