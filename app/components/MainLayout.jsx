"use client";

// React
import { React, createContext, useState } from "react";

import theme from "../../theme/themeConfig.js";

// Project
import CustomHeader from "@/app/components/CustomHeader";
import Navbar from "@/app/components/Navbar";
import CustomBanner from "@/app/components/CustomBanner";
import CustomFooter from "@/app/components/CustomFooter";

// AntD
import { ConfigProvider, Layout } from "antd";
const { Header, Content } = Layout;
import { Footer } from "antd/es/layout/layout";

// CONTEXT
export const PageCategoryContext = createContext();

// Used so that the content stretches throughout the page
const globalLayoutStyle = {
  minHeight: "100vh",
};

// Prevents black boxes appearing on the sides of the navbar
const headerStyle = {
  backgroundColor: "white",
};
export default function MainLayout({ children }) {
  const [pageCategory, setPageCategory] = useState("default");
  console.log("STATE FROM CONFIG PROVIDER:", pageCategory);

  return (
    <ConfigProvider theme={theme}>
      <PageCategoryContext.Provider value={{ pageCategory, setPageCategory }}>
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
      </PageCategoryContext.Provider>
    </ConfigProvider>
  );
}
