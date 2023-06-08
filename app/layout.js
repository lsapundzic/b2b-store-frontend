"use client";

// Component imports
import Navbar from "./components/Navbar";
import "/app/globals.css";

export const metadata = {
  title: "Sotla Lab Experts d.o.o.",
  description:
    "Sotla d.o.o. is a manufacturer, distributor, and retailer of high quality laboratory equipment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex min-h-screen flex-col">
        <header className=" p-4">
          <Navbar />
        </header>
        <div className="flex flex-1 flex-row">
          <main className="flex-1 bg-blue-50 p-4">{children}</main>
          <nav className="order-first w-32 bg-blue-100 p-4">Navigation</nav>
          <aside className="w-32 bg-blue-100 p-4">Side</aside>
        </div>
        <footer className="bg-blue-200 p-4">Footer</footer>
      </div>

      {/* Suppress Hydration Warning added to stop the browser console message caused by Grammarly*/}
      <body suppressHydrationWarning={true}></body>
    </html>
  );
}
