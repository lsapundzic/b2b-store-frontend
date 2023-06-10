// Main layout

import "/app/globals.css";

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
        <div class="flex min-h-screen flex-col">
          <header class="p-4 bg-red-500">Header</header>
          <div class="flex flex-1 flex-row">
            <main class="flex-1 p-4 bg-green-500">{children}</main>
          </div>
          <footer class="p-4 bg-blue-500">Footer</footer>
        </div>
      </body>
    </html>
  );
}
