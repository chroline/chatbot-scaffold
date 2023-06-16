import { extendTheme } from "@mui/joy/styles";

import { extendComponentsStyle } from "./base";

const primary = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
  950: "#172554",
};

const neutral = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b",
};

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary,
        neutral,
        background: {
          body: "var(--joy-palette-neutral-50, #D8D8DF)",
          surface: "var(--joy-palette-common-white, #FFF)",
        },
      },
    },
    dark: {
      palette: {
        primary,
        neutral,
        background: {
          body: "var(--joy-palette-neutral-800, #25252D)",
          surface: "var(--joy-palette-neutral-900, #131318)",
        },
      },
    },
  },
  fontFamily: {
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
});

export const componentsStyle = extendComponentsStyle({});
