import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "/app/globals.css";

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
        <Banner
          message={"The issue with the UI libraries has been resolved!"}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
