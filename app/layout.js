import "/app/globals.css";
import Banner from "./components/Banner";
import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";

export const metadata = {
  title: "Sotla Lab",
  description:
    "Sotla d.o.o. is a manufacturer, distributor, and retailer of high quality laboratory equipment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Suppress Hydration Warning added to stop the browser console message caused by Grammarly*/}
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
