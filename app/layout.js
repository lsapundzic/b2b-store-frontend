"use client";

import { Providers } from "./providers";

// Styles
import "/app/globals.css";

export const metadata = {
  title: "Sotla Lab Experts d.o.o.",
  description:
    "Sotla d.o.o. is a manufacturer, distributor, and retailer of quality laboratory equipment",
};

export default function RootLayout({ children }) {
  console.log("Root layout running...");

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
