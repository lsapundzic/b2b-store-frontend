"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components
import { Layout, Space } from "antd";
import Navbar from "@/app/components/Navbar";

const { Header, Footer, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sotla Laboratory Experts",
  description:
    "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
};

// TODO: Something in the header layout is giving Navbar a padding that looks terrible

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
        <Space>
          <Layout>
            <Header style={{ backgroundColor: "white" }}>
              <Navbar></Navbar>
            </Header>
            <Content>{children}</Content>
            <Footer>
              This is where the footer will be it just exists here
            </Footer>
          </Layout>
        </Space>
      </body>
    </html>
  );
}
