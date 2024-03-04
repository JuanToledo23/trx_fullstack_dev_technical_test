"use client";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#d0df00",
    },
    secondary: {
      main: "#eeda50",
    },
    error: {
      main: "#fb5151",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
