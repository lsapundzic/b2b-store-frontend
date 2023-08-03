"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components
import { Layout } from "antd";
import Navbar from "@/app/components/Navbar";
import { Footer } from "antd/es/layout/layout";

// AntD imports
const { Header, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

// ! Metadata disabled, conflicts with use client
// export const metadata = {
//   title: "Sotla Laboratory Experts",
//   description:
//     "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
// };

// Header styling
const headerStyle = {
  backgroundColor: "white",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* AntDesign layout structure */}
        <Layout>
          {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Content>{children}</Content>
          <Footer>Footer goes here</Footer>
        </Layout>
      </body>
    </html>
  );
}
