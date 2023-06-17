// Main layout

// Project components
import Navbar from "@/app/components/Navbar";
import navContent from "@/app/util/navContent";

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
      {/* Suppress Hydration Warning added to stop the browser console message caused by Grammarly*/}
      <body suppressHydrationWarning={true}>
        <div className="flex min-h-screen flex-col">
          <header className="p-4 bg-red-500">
            <Navbar navigation={navContent} />
          </header>

          <div className="flex flex-1 flex-row">
            <main className="flex-1 p-4 bg-green-500">{children}</main>
          </div>
          <footer className="p-4 bg-blue-500">TBA</footer>
        </div>
      </body>
    </html>
  );
}
