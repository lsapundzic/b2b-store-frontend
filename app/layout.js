"use client";

// Google fonts
import {Inter} from "next/font/google";

// Project components
import Navbar from "./components/Navbar";
import CustomFooter from "./components/Footer";


import {Layout} from "antd";

const {Header, Footer, Content} = Layout;

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Sotla Laboratory Experts",
    description:
        "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
};

// Layout styling
const headerStyle = {
    // textAlign: "center",
    // color: "#fff",
    // height: 64,
    // paddingInline: 50,
    // lineHeight: "64px",
    // backgroundColor: "#7dbcea",
};

const contentStyle = {
    // textAlign: "center",
    // minHeight: 120,
    // lineHeight: "120px",
    // color: "#fff",
    // backgroundColor: "#108ee9",
};

const footerStyle = {
    // textAlign: "center",
    // color: "#fff",
    // backgroundColor: "#7dbcea",
};

// TODO: Something in the header layout is giving Navbar a padding that looks terrible

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Layout>
            <Header style={headerStyle}>
                <Navbar/>
            </Header>
            <Content style={contentStyle}>{children}</Content>
            <Footer style={footerStyle}>
                <CustomFooter/>
            </Footer>
        </Layout>
        </body>
        </html>
    );
}
