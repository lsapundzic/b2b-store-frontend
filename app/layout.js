// Main layout
"use client";

// Project sections
import Navbar from "@/app/sections/Navbar";
import routes from "@/app/routes/routes";
import { NextUIProvider } from "@nextui-org/react";

// Styles
import "/app/globals.css";
import Footer from "./sections/Footer";

export const metadata = {
  title: "Sotla Lab Experts d.o.o.",
  description:
    "Sotla d.o.o. is a manufacturer, distributor, and retailer of quality laboratory equipment",
};

export default function RootLayout({ children }) {
  console.log("Root layout running...");

  return (
    <html lang="en">
      <NextUIProvider>
        <body>
          <div className="flex min-h-screen flex-col">
            <header className="p-4">
              <Navbar routes={routes} />
            </header>

            <div className="flex flex-1 flex-row">
              <main className="flex-1 p-4">{children}</main>
            </div>
            <div className="p-4">
              <Footer />
            </div>
          </div>
        </body>
      </NextUIProvider>
    </html>
  );
}
