/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

// React
import { useState, useDataRetriever } from "../../hooks/useDataRetriever";

// Project
import { textStyle, pageStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../components/ImageAsset.jsx";
import ProductTCCard from "@/app/components/ProductTCCard.jsx";
import ProductTabs from "@/app/components/ProductTabs.jsx";
import CustomBanner from "@/app/components/CustomBanner.jsx";
import CustomSkeleton from "@/app/components/CustomSkeleton";
import CustomEmpty from "@/app/components/CustomEmpty";
import CustomModal from "@/app/components/CustomModal";

// AntD
import { Button, Col, Divider, Row, Space, Typography } from "antd";

import Layout, { Content } from "antd/es/layout/layout.js";

const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;

  // Fetch entry data
  const { data, isLoading } = useDataRetriever(SingleEntryURL(product));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading)
    return (
      <div style={pageStyle}>
        <CustomSkeleton />
      </div>
    );
  if (!data) return <CustomEmpty />;

  console.log(`${data.fields.name} rendered`);

  return (
    <div style={pageStyle}>
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
                <Title>
                  {data.fields.name} - {data.fields.fullName}
                </Title>
                <p>
                  <Title level={5}>SKU: {data.fields.sku}</Title>
                </p>
                <Divider />
                <Paragraph style={textStyle}>
                  {data.fields.description}
                </Paragraph>
                <Divider />
                <Button
                  type="primary"
                  onClick={showModal}
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
            <Col xs={0} sm={0} md={0} lg={7} xl={5}>
              <ProductTCCard />
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
            <Col xs={0} sm={24}>
              <Divider orientation="left">Similar Products</Divider>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
  ``;
}
