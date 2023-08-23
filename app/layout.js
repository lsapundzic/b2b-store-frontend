// "use client";

import React from "react";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Sotla Lab Equipment",
//   description:
//     "Manufacturers and distributors of laboratory equipment & lab consumables",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Recommended by AntDesign to prevent FOUC (Flash of Unstyled Content) */}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
