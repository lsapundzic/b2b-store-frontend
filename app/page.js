"use client";

// Project imports
import { pageStyle, textStyle } from "./styles/globalStyles";

// AntD imports
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Homepage() {
  console.log("Homepage running...");

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>Homepage</Title>
        <Paragraph style={textStyle}>The content goes here</Paragraph>
      </Typography>
    </div>
  );
}
