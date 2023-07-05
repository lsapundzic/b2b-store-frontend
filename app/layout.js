"use client";

// Testing ChakraUI

// ChakraUI imports
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

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
          <ChakraProvider>
            <Grid
              templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
              gridTemplateRows={"50px 1fr 30px"}
              gridTemplateColumns={"150px 1fr"}
              h="200px"
              gap="1"
              color="blackAlpha.700"
              fontWeight="bold"
            >
              <GridItem pl="2" bg="orange.300" area={"header"}>
                Header
              </GridItem>
              <GridItem pl="2" bg="pink.300" area={"nav"}>
                Nav
              </GridItem>
              <GridItem pl="2" bg="green.300" area={"main"}>
                {children}
              </GridItem>
              <GridItem pl="2" bg="blue.300" area={"footer"}>
                Footer
              </GridItem>
            </Grid>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
