import Construction from "./components/construction";
import Header from "@/app/components/header";

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
        <Header />
        <Construction
          message={
            "Problems with the UI have been resolved. The project construction continues..."
          }
        />
        {children}
      </body>
    </html>
  );
}
