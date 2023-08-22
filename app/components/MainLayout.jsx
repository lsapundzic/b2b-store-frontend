"use client";

import theme from "../../theme/themeConfig.js";

// React
import { createContext, useState } from "react";

export const PageCategoryContext = createContext({ pageCategory: "default" });

// AntD
import { ConfigProvider, Layout } from "antd";
import CustomHeader from "@/app/components/CustomHeader";
import Navbar from "@/app/components/Navbar";
import CustomBanner from "@/app/components/CustomBanner";
import CustomFooter from "@/app/components/CustomFooter";

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
  const [pageCategory, setPageCategory] = useState("default");

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
          {/* <Newsletter /> */}
          <Footer>
            <CustomFooter />
          </Footer>
        </Layout>
      </PageCategoryContext.Provider>
    </ConfigProvider>
  );
}
