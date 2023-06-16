import { InfoRounded, LinkRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/joy";

import { ColorModeToggle } from "../ColorModeToggle";
import { NavbarContainer } from "./Container";
import { NavbarContent } from "./Content";
import { NavbarTitle } from "./Title";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent color="primary" variant="solid" invertedColors>
        <Box>
          <Button onClick={() => {}} variant="soft" startDecorator={<InfoRounded />} sx={{ marginRight: 1 }}>
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
