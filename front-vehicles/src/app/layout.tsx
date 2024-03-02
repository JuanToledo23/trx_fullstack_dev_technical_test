import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traxi - Juan Alberto Toledo Tello",
  description: "Developed by Juan Alberto Toledo Tello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
