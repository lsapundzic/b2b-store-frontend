"use client";

// React
import { useContext } from "react";
import MainLayout from "./MainLayout.jsx";
import { PageCategoryContext } from "./layout.js";

// AntD
import {
  Carousel,
  Col,
  ConfigProvider,
  Divider,
  Image,
  Row,
  Typography,
} from "antd";
const { Title } = Typography;

// Project
import { pageStyle } from "./styles/globalStyles";

export default function Homepage() {
  const { pageCategory } = useContext(PageCategoryContext);
  return (
    <MainLayout>
      <div style={pageStyle}>
        <Row>
          <Col xs={0} sm={0} md={24}>
            <Carousel autoplay>
              <div>
                <Image
                  src="/images/home/carousel-1.jpg"
                  alt="placeholder image"
                  width={"auto"}
                  height={"auto"}
                  preview={false}
                />
              </div>
              <div>
                <Image
                  alt="A placeholder image"
                  src="https://picsum.photos/1800/600"
                  preview={false}
                />
              </div>
              <div>
                <Image
                  alt="A placeholder image"
                  src="https://placehold.co/1800x600"
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
    </MainLayout>
  );
}
