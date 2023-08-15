"use client";

// Project imports
import { pageStyle, textStyle } from "./styles/globalStyles";

// AntD imports
import { Carousel, Image, Typography } from "antd";
const { Title, Paragraph } = Typography;

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "green",
};

export default function Homepage() {
  console.log("Homepage rendered");

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
      <Typography>
        <Title>Homepage</Title>
        <Paragraph style={textStyle}>The content goes here</Paragraph>
      </Typography>
    </div>
  );
}
