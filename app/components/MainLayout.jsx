"use client";

import theme from "../../theme/themeConfig.js";

// React
import { createContext, useState } from "react";

// Project
import CustomHeader from "@/app/components/CustomHeader";
import Navbar from "@/app/components/Navbar";
import CustomBanner from "@/app/components/CustomBanner";
import CustomFooter from "@/app/components/CustomFooter";

// AntD
import { ConfigProvider, Layout } from "antd";
const { Header, Content } = Layout;
import { Footer } from "antd/es/layout/layout";

// Used so that the content stretches throughout the page
const globalLayoutStyle = {
  minHeight: "100vh",
};

// Prevents black boxes appearing on the sides of the navbar
const headerStyle = {
  backgroundColor: "white",
};
export default function MainLayout({ children }) {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={globalLayoutStyle}>
        <CustomHeader />
        {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <CustomBanner bannerContent={""} />
        <Content>{children}</Content>
        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
