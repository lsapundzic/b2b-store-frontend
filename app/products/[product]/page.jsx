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
import { Button, Col, Divider, Empty, Row, Skeleton, Typography } from "antd";
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
        <Col span={4}>Conditions card will go here</Col>
      </Row>
      <Row>
        <Col span={15}>
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
              </tr>
              <tr>
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
}
