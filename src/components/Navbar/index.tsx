import { InfoRounded, LinkRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/joy";

import { ColorModeToggle } from "../ColorModeToggle";
import { useInfoModalState } from "../InfoModal";
import { NavbarContainer } from "./Container";
import { NavbarContent } from "./Content";
import { NavbarTitle } from "./Title";

export const Navbar = () => {
  const { toggle: toggleInfoModal } = useInfoModalState();

  return (
    <NavbarContainer>
      <NavbarContent color="primary" variant="solid" invertedColors>
        <Box>
          <Button
            onClick={() => toggleInfoModal()}
            variant="soft"
            startDecorator={<InfoRounded />}
            sx={{ marginRight: 1 }}
          >
            Info
          </Button>
          <Button onClick={() => {}} variant="soft" startDecorator={<LinkRounded />} sx={{ marginRight: 1 }}>
            GitHub
          </Button>
        </Box>
        <NavbarTitle>
          <Typography fontWeight={"bold"}>Chatbot Scaffold</Typography>
        </NavbarTitle>
        <Box>
          <ColorModeToggle />
        </Box>
      </NavbarContent>
    </NavbarContainer>
  );
};
