"use client";

import React from "react";
import {createContext, useContext, useState} from "react";
import {Inter} from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

// CONTEXT
export const PageCategoryContext = createContext();

const inter = Inter({subsets: ["latin"]});

// ! useState and createContext are client-side hooks and clash with metadata that is a server-side render
// export const metadata = {
//   title: "Sotla Lab Equipment",
//   description:
//     "Manufacturers and distributors of laboratory equipment & lab consumables",
// };

export default function RootLayout({children}) {
    const [pageCategory, setPageCategory] = useState("default");

    return (
        <html lang="en">
        <body className={inter.className}>
        <PageCategoryContext.Provider value={{pageCategory, setPageCategory}}>
            {/* Recommended by AntDesign to prevent FOUC (Flash of Unstyled Content) */}
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </PageCategoryContext.Provider>
        </body>
        </html>
    );
}
