/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

// React
import { useContext, useState } from "react";
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project
import { textStyle, pageStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../components/ImageAsset.jsx";
import TCCard from "@/app/components/TCCard.jsx";
import ProductTabs from "@/app/components/ProductTabs.jsx";
import CustomBanner from "@/app/components/CustomBanner.jsx";

// AntD
import {
  Button,
  Col,
  Divider,
  Empty,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";

import Layout, { Content } from "antd/es/layout/layout.js";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;

  let { page } = useContext(PageContext);
  console.log(`${page} rendered`);

  const { data, isLoading } = usePageContent(SingleEntryURL(product));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Layout>
        <Content>
          <Row gutter={[64, 24]}>
            {/* Image Column */}
            <Col span={8}>
              <ImageAsset
                style={{ paddingTop: "26.6" }}
                assetID={data.fields.image.sys.id}
                width={"auto"}
                height={"auto"}
                preview={true}
              />
            </Col>

            {/* Product Overview Column */}
            <Col span={11}>
              <Typography>
                <Title level={3}>
                  {data.fields.name} - {data.fields.fullName}
                </Title>
                <p>
                  Category: <Button type="text">{data.fields.category}</Button>{" "}
                  | SKU: {data.fields.sku}
                </p>
                <Divider />
                <Paragraph style={textStyle}>
                  {data.fields.description}
                </Paragraph>
                <Divider />
                <Button
                  type="primary"
                  style={{
                    width: `100%`,
                    height: 45,
                    backgroundColor: "green",
                  }}
                >
                  Request a Quote
                </Button>
              </Typography>
            </Col>

            {/* Terms & Conditions Card */}
            <Col span={5}>
              <TCCard />
            </Col>
          </Row>

          {/* Separator */}
          <CustomBanner height={80} width={100} />

          {/* Technical Specifications Row */}
          <Row gutter={[16, 24]}>
            <Col span={24}>
              <ProductTabs
                productDescription={data.fields.description}
                productSpecifications={data.fields.technicalSpecifications}
              />
            </Col>

            {/* Separator */}
            <CustomBanner height={80} width={100} />

            {/* Similar Products Row */}
          </Row>
          <Row gutter={[16, 24]}>
            <Col span={24}>
              <Divider orientation="left" orientationMargin="0">
                Similar Products
              </Divider>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
