/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

// React
import { useState, useContext } from "react";
import { useDataFetch } from "../../hooks/useDataFetch";

// Project
import { textStyle, pageStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../components/ImageAsset.jsx";
import ProductTCCard from "@/app/components/ProductTCCard.jsx";
import CustomTabs from "@/app/components/CustomTabs.jsx";
import CustomBanner from "@/app/components/CustomBanner.jsx";
import CustomSkeleton from "@/app/components/CustomSkeleton";
import CustomModal from "@/app/components/CustomModal";

// AntD
import { Button, Col, Divider, Row, Space, Typography, Modal } from "antd";

import Layout, { Content } from "antd/es/layout/layout.js";
import { DownloadOutlined } from "@ant-design/icons";
import MainLayout from "@/app/MainLayout";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;

  // Fetch entry data
  const { data, isLoading } = useDataFetch(SingleEntryURL(product));

  console.log(`Product page rendered`);

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <Layout>
              <Content>
                <Row gutter={[64, 24]}>
                  {/* Image Column */}
                  <Col xs={0} sm={0} md={10} lg={6} xl={8}>
                    <ImageAsset
                      style={{ paddingTop: "26.6" }}
                      assetID={data.fields.image.sys.id}
                      width={"auto"}
                      height={"auto"}
                      preview={true}
                    />
                  </Col>

                  {/* Product Overview Column */}
                  <Col xs={24} sm={24} md={14} lg={11} xl={11}>
                    <Typography>
                      <Title level={3}>
                        {data.fields.name} - {data.fields.fullName}
                      </Title>
                      <Divider />
                      <Paragraph style={textStyle}>
                        {data.fields.description}
                      </Paragraph>
                    </Typography>

                    <CustomModal />

                    <Divider />
                    <div style={{ fontSize: "14px" }}>
                      <Link style={{ margin: "6px" }} href="/">
                        Terms & Conditions
                      </Link>
                      <p style={{ margin: "6px" }}>SKU: {data.fields.sku}</p>
                      <p style={{ margin: "6px" }}>
                        Category: {data.fields.category}
                      </p>
                      <p style={{ margin: "6px" }}>Tags: </p>
                    </div>
                  </Col>

                  {/* Card space */}
                  <Col xs={0} sm={0} md={0} lg={7} xl={5}>
                    <Space direction="vertical" size={"large"}>
                      <ProductTCCard />
                      <Button>
                        <DownloadOutlined />
                        Download Catalogue
                      </Button>
                    </Space>
                  </Col>
                </Row>

                {/* Separator */}
                <CustomBanner height={80} width={100} />

                {/* Technical Specifications Row */}
                <Row gutter={[16, 24]}>
                  <Col span={24}>
                    <CustomTabs
                      leftTitle={"Description"}
                      leftDetails={data.fields.description}
                      rightTitle={`Technical Specifications`}
                      rightDetals={data.fields.technicalSpecifications}
                    />
                  </Col>

                  {/* Separator */}
                  <CustomBanner height={80} width={100} />

                  {/* Similar Products Row */}
                </Row>
                <Row gutter={[16, 24]}>
                  <Col xs={0} sm={24}>
                    <Divider orientation="left">Similar Products</Divider>
                  </Col>
                </Row>
              </Content>
            </Layout>
          </>
        )}
      </div>
    </MainLayout>
  );
}
