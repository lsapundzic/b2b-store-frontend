import Header from "@/app/components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Sotla Lab",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Suppress Hydration Warning added to stop the browser console message caused by Grammarly*/}
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
