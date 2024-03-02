"use client";
import { Roboto } from "next/font/google";
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
  },
};

const theme = createTheme(themeOptions);

export default theme;
