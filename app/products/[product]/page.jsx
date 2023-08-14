/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

// React imports
import { usePageContent } from "../../hooks/usePageContent.jsx";

// Project imports
import { pageStyle, textStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../utils/ImageAsset.jsx";

// AntD imports
import { Col, Empty, Row, Skeleton, Typography } from "antd";
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
      <Row>
        <Col span={8}>
          <ImageAsset
            assetID={data.fields.image.sys.id}
            width={350}
            height={"auto"}
          />
        </Col>
        <Col span={12}>
          <Typography>
            <Title>
              {data.fields.name} - {data.fields.fullName}
            </Title>
            <Paragraph style={textStyle}>{data.fields.description}</Paragraph>
          </Typography>
        </Col>
        <Col span={4}>Conditions card will go here</Col>
      </Row>
    </div>
  );
}
