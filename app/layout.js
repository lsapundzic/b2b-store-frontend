"use client";

// Testing ChakraUI

// ChakraUI imports
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sotla Laboratory Experts",
  description:
    "Manufacturers, distributors, and sellers of laboratory equipment & lab consummables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
