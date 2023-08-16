"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components

// AntD components
import { Col, Divider, Layout, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Navbar from "./components/Navbar";
import EmptyBanner from "./components/EmptyBanner";
import CompanyHeader from "./components/CompanyHeader";
import Title from "antd/es/typography/Title";
import Link from "antd/es/typography/Link";
import FooterContent from "./components/FooterContent";
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
          <CompanyHeader />
          {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <EmptyBanner width={100} height={50} bannerMessage={""} />
          <Content>{children}</Content>
          <Footer>
            <FooterContent />
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
