// ThemeProvider.tsx
import React, { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme, Theme } from "@mui/material";
import palette from "./palette";

// Define props for the ThemeProvider, ensuring children are typed as ReactNode
interface ThemeProviderProps {
  children: ReactNode;
}

// TypeScript version of ThemeProvider
export default function ThemeProvider({ children }: ThemeProviderProps) {
  // You can dynamically switch between 'light' and 'dark' modes here
  const theme: Theme = createTheme({
    palette: palette("light"), // You can change 'light' to 'dark' as needed
  });

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
