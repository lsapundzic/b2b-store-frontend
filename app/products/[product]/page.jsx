/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

import Banner from "@/app/components/Banner.jsx";
// React imports
import { usePageContent } from "../../hooks/usePageContent.jsx";

// Project imports
import { textStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../utils/ImageAsset.jsx";

// AntD imports
import {
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
import Sider from "antd/es/layout/Sider.js";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;
  console.log("Product.jsx");

  const { data, isLoading } = usePageContent(SingleEntryURL(product));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  const dsrc = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    // <div style={pageStyle}>
    <Layout>
      <Content>
        <Row gutter={[16, 24]}>
          <Col span={10}>
            <ImageAsset
              style={{ paddingTop: "26.6" }}
              assetID={data.fields.image.sys.id}
              width={"auto"}
              height={"auto"}
            />
          </Col>

          <Col span={14}>
            <Typography>
              <Title level={4}>
                {data.fields.name} - {data.fields.fullName}
              </Title>
              <Divider />
              <Paragraph style={textStyle}>{data.fields.description}</Paragraph>
              <Divider />
              <Button
                type="primary"
                style={{
                  width: `100%`,
                  height: 45,
                  backgroundColor: "green",
                }}
              >
                Contact Sales Support
              </Button>
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col span={20}></Col>
        </Row>
      </Content>
    </Layout>
    // </div>
  );
}
