/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

// React imports
import { usePageContent } from "../../hooks/usePageContent.jsx";

// Project imports
import { textStyle, pageStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../components/ImageAsset.jsx";

// AntD imports
import {
  Badge,
  Button,
  Col,
  Divider,
  Empty,
  List,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";

import Layout, { Content } from "antd/es/layout/layout.js";
import TCCard from "@/app/components/TCCard.jsx";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;
  console.log("Product.jsx");

  const { data, isLoading } = usePageContent(SingleEntryURL(product));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Layout>
        <Content>
          <Row gutter={[16, 24]}>
            <Col span={8}>
              <ImageAsset
                style={{ paddingTop: "26.6" }}
                assetID={data.fields.image.sys.id}
                width={"auto"}
                height={"auto"}
                preview={true}
              />
            </Col>

            <Col span={12}>
              <Typography>
                <Title level={3}>
                  {data.fields.name} - {data.fields.fullName}
                </Title>
                <p>
                  Category: {data.fields.category} | SKU: {data.fields.sku}
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
            <Col span={4}>
              <TCCard />
            </Col>
          </Row>
          <div style={{ height: "120px" }}></div>
          <Row gutter={[16, 24]}>
            <Col span={24}>
              <Divider orientation="left">Description</Divider>
              <Paragraph style={textStyle}>{data.fields.description}</Paragraph>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
