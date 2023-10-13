"use client";

import theme from "../theme/themeConfig.js";

// Project
import Navbar from "@/app/components/Navbar";
import CustomBanner from "@/app/components/CustomBanner";
import CustomFooter from "@/app/components/CustomFooter";

// AntD
import {ConfigProvider, Layout} from "antd";
import {Footer} from "antd/es/layout/layout";

const {Header, Content} = Layout;

// Used so that the content stretches throughout the page
const globalLayoutStyle = {
    minHeight: "100vh",
};

// Prevents black boxes appearing on the sides of the navbar
const headerStyle = {
    backgroundColor: "white",
};
export default function MainLayout({children}) {
    return (
        <ConfigProvider theme={theme}>
            <Layout style={globalLayoutStyle}>
                {/*<CustomHeader/>*/}
                {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
                <Header style={headerStyle}>
                    <Navbar/>
                </Header>
                <CustomBanner bannerContent={""}/>
                <Content>{children}</Content>
                <Footer>
                    <CustomFooter/>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}
