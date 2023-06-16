import { useEffect, useState } from "react";

import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { Box, Switch, useColorScheme } from "@mui/joy";

export const ColorModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [checked, setChecked] = useState<boolean>(mode === "dark");

  useEffect(() => {
    setMode(checked ? "dark" : "light");
  }, [checked, setMode]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <LightModeRounded sx={{ marginRight: 1 }} />
      <Switch variant="soft" checked={checked} onChange={event => setChecked(event.target.checked)} />
      <DarkModeRounded sx={{ marginLeft: 1 }} />
    </Box>
  );
};
