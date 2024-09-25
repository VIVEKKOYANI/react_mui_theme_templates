// palette.ts
import { PaletteOptions, PaletteMode } from "@mui/material";

// Define the colors with the correct types
const PRIMARY: PaletteOptions['primary'] = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};

const SECONDARY: PaletteOptions['secondary'] = {
  main: "#9c27b0",
  light: "#ba68c8",
  dark: "#7b1fa2",
  contrastText: "#fff",
};

const INFO: PaletteOptions['info'] = {
  main: "#0288d1",
  light: "#03a9f4",
  dark: "#01579b",
  contrastText: "#fff",
};

const SUCCESS: PaletteOptions['success'] = {
  main: "#2e7d32",
  light: "#4caf50",
  dark: "#1b5e20",
  contrastText: "#fff",
};

const WARNING: PaletteOptions['warning'] = {
  main: "#ed6c02",
  light: "#ff9800",
  dark: "#e65100",
  contrastText: "#fff",
};

const ERROR: PaletteOptions['error'] = {
  main: "#d32f2f",
  light: "#ef5350",
  dark: "#c62828",
  contrastText: "#fff",
};

const COMMON = {
  black: "#000000",
  white: "#FFFFFF",
};

// Create light and dark palette options
const lightPalette: PaletteOptions = {
  mode: "light" as PaletteMode,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  common: COMMON,
};

const darkPalette: PaletteOptions = {
  mode: "dark" as PaletteMode,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  common: COMMON,
};

// The palette function can now specify the type of mode and return PaletteOptions
export default function palette(mode: PaletteMode = "light"): PaletteOptions {
  return mode === "dark" ? darkPalette : lightPalette;
}
