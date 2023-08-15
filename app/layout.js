"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components
import Navbar from "@/app/components/Navbar";

// AntD components
import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
const { Header, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

// ! Metadata disabled, conflicts with use client
// export const metadata = {
//   title: "Sotla Laboratory Experts",
//   description:
//     "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
// };

// Used so that the content stretches throughout the page
const globalLayoutStyle = {
  minHeight: "100vh",
};

// Prevents black boxes appearing on the sides of the navbar
const headerStyle = {
  backgroundColor: "white",
};

// TODO: Create an actual footer component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={globalLayoutStyle}>
          {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
          <Header style={headerStyle}>
            <Navbar />
          </Header>

          <Content>{children}</Content>

          <Footer style={{ textAlign: "center" }}>
            <h3>SOTLA Laboratory Experts d.o.o.</h3>
            <p>Polje ob Sotli 4</p>
            <p>3255 Buče</p>
            <p>Slovenia</p>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
