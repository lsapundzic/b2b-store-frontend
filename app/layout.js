"use client";

import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import routes from "./routes/routes";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sotla Laboratory Experts",
  description:
    "Manufacturers, distributors, and sellers of laboratory equipment & lab consummables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Header>
            <Navbar routes={routes}></Navbar>
          </Header>
          <Content>{children}</Content>
          <Footer></Footer>
        </Layout>
      </body>
    </html>
  );
}
