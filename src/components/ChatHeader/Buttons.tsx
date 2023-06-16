import { DeleteSweepRounded } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/joy";

import useStore from "~/core/store";

export const ChatHeaderButtons = () => {
  const { clearChat } = useStore();

  return (
    <>
      <Box sx={theme => ({ [theme.breakpoints.down("md")]: { display: "none" } })}>
        <Button variant="plain" color="danger" startDecorator={<DeleteSweepRounded />} onClick={() => clearChat()}>
          Reset Chat
        </Button>
      </Box>
      <Box sx={theme => ({ [theme.breakpoints.up("md")]: { display: "none" } })}>
        <IconButton variant="plain" color="danger" onClick={() => clearChat()}>
          <DeleteSweepRounded />
        </IconButton>
      </Box>
    </>
  );
};
