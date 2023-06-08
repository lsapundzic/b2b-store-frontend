"use client";

// Component imports
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "/app/globals.css";

// Fragment imports
import Separator from "./fragments/Separator.jsx";

// * Header and footer navigation
const navigation = [
  { page: "About", path: "/about" },
  { page: "Deals", path: "/deals" },
  { page: "Products", path: "/products" },
  { page: "Contact", path: "/contact" },
];

export const metadata = {
  title: "Sotla Lab Experts d.o.o.",
  description:
    "Sotla d.o.o. is a manufacturer, distributor, and retailer of high quality laboratory equipment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Suppress Hydration Warning added to stop the browser console message caused by Grammarly*/}
      <body suppressHydrationWarning={true}>
        {/* Banner disabled */}
        {/* <Banner message={"Special Discount Today Banner"} /> */}
        <Navbar navigation={navigation} />
        <Separator />
        <main>{children}</main>
        <Separator />
        {/* <Footer navigation={navigation} /> */}
      </body>
    </html>
  );
}
