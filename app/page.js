"use client";

// React
import { useContext } from "react";

// Project
import { pageStyle } from "./styles/globalStyles";
import { PageCategoryContext } from "./layout";

// AntD
import { Carousel, Col, Divider, Image, Row, Typography } from "antd";
import ImageAsset from "./components/ImageAsset";
const { Title } = Typography;

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "green",
};

export default function Homepage() {
  const { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  return (
    <div style={pageStyle}>
      <Row>
        <Col xs={0} sm={24}>
          <Carousel autoplay>
            <div>
              <ImageAsset
                assetID={"3sTbqR9zOSFpn7fnszCQFK"}
                width={1800}
                height={"auto"}
                preview={false}
              />
            </div>
            <div>
              <Image
                alt="placeholder image"
                src="https://picsum.photos/1800/600"
                preview={false}
              />
            </div>
            <div>
              <Image
                alt="placeholder image"
                src="https://placehold.co/1800x600"
                preview={false}
              />
            </div>
            <div>
              <Image
                src="../images/carousel-1.jpg"
                alt="placeholder image"
                width={1800}
                height={"auto"}
                preview={false}
              />
            </div>
          </Carousel>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Typography>
            <Title level={2}>Special Offers</Title>
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
