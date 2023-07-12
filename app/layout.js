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
      <Head>
        <title>Sotla Lab Experts</title>
        <meta
          property="description"
          content="Manufacturers, distributors, and sellers of laboratory equipment & lab consumables"
        />
      </Head>
      <body className={inter.className}>
        {/* AntD header-body-footer layout */}
        <Layout>
          {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
          <Header style={{ backgroundColor: "white" }}>
            <Navbar />
          </Header>
          <Content>{children}</Content>
        </Layout>
      </body>
    </html>
  );
}
