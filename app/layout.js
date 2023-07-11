"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components
import { Layout, Space } from "antd";
import Navbar from "@/app/components/Navbar";

// AntD imports
const { Header, Content } = Layout;

// Next components
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// TODO: Metadata disabled, conflicts with use client find alternative way to add it
// export const metadata = {
//   title: "Sotla Laboratory Experts",
//   description:
//     "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
// };

// TODO: Check if header styling is necessary and what it does
// Header styling
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingLeft: -50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Check if the Space component is necessary */}
        <Space>
          {/* AntD holy grail layout */}
          <Layout>
            {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
            <Header style={{ backgroundColor: "white" }}>
              <Navbar />
            </Header>
            <Content>{children}</Content>
          </Layout>
        </Space>
      </body>
    </html>
  );
}
