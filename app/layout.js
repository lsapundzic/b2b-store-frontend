"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components
import { Layout, Space } from "antd";
import Navbar from "@/app/components/Navbar";

// React imports
import Head from "next/head";

// AntD imports
const { Header, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

// ! Metadata disabled, conflicts with use client
// ? Testing if adding a Header component will fix the problem
// export const metadata = {
//   title: "Sotla Laboratory Experts",
//   description:
//     "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
// };

// Dynamic metadata
// export async function generateMetadata({ params }) {
//   return {
//     title: "Sotla Lab",
//     description: "The best website",
//   };
// }

// TODO: Check if all the other attributes are necessary
// Header styling
const headerStyle = {
  // textAlign: "center",
  // color: "#fff",
  // height: 64,
  // paddingLeft: -50,
  // lineHeight: "64px",
  backgroundColor: "white",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Doesn't seem to be working anyway */}
      <Head>
        <title>Head Component</title>
        {/*<meta*/}
        {/*  property="description"*/}
        {/*  content="Manufacturers, distributors, and sellers of laboratory equipment & lab consumables"*/}
        {/*/>*/}
      </Head>
      <body className={inter.className}>
        {/* AntD header-body-footer layout */}
        <Layout>
          {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Content>{children}</Content>
        </Layout>
      </body>
    </html>
  );
}
