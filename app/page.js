"use client";

// React
import { useContext } from "react";

// Project
import { pageStyle } from "./styles/globalStyles";
import { PageContext } from "./layout";

// AntD
import { Carousel, Divider, Image, Typography } from "antd";
const { Title, Paragraph } = Typography;

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "green",
};

export default function Homepage() {
  const { page } = useContext(PageContext);
  console.log(`${page} rendered`);

  return (
    <div style={pageStyle}>
      <Carousel autoplay>
        <div>
          <Image alt="placeholder image" src="https://placehold.co/1600x400" />
        </div>
        <div>
          <Image alt="placeholder image" src="https://placehold.co/1600x400" />
        </div>
        <div>
          <Image alt="placeholder image" src="https://placehold.co/1600x400" />
        </div>
        <div>
          <Image alt="placeholder image" src="https://placehold.co/1600x400" />
        </div>
      </Carousel>
      <Divider />
      <Typography>
        <Title level={2}>Special Offers</Title>
      </Typography>
    </div>
  );
}
