"use client";

// Google fonts
import { Inter } from "next/font/google";

// React
import { useState, createContext } from "react";

// Project
import CustomBanner from "./components/CustomBanner";
import CustomHeader from "./components/CustomHeader";
import CustomFooter from "./components/CustomFooter";

// AntD
import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
import Navbar from "./components/Navbar";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={globalLayoutStyle}>
          <CustomHeader />
          {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <CustomBanner width={100} height={50} bannerMessage={""} />
          <Content>{children}</Content>
          <Footer>
            <CustomFooter />
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
