"use client";

// Google fonts
import {Inter} from "next/font/google";

// Project components
import {Layout, Space} from "antd";
import Banner from "@/app/components/Banner";
import Navbar from "@/app/components/Navbar";
import CustomFooter from "@/app/components/Footer";

const {Header, Footer, Content} = Layout;

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Sotla Laboratory Experts",
    description:
        "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
};

// TODO: Something in the header layout is giving Navbar a padding that looks terrible

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Space>
            <Layout>
                <Header>
                    {/*<Banner content="Welcome to the big summer sale!"/>*/}
                    <Navbar/>
                </Header>
                <Content>{children}</Content>
                <Footer>
                    {/*<CustomFooter/>*/}
                </Footer>
            </Layout>
        </Space>

        </body>
        </html>
    );
}
