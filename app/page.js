"use client";

// AntD imports
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Homepage() {
  console.log("Homepage running...");

  return (
    <main>
      <Typography>
        <Title>Homepage!</Title>
        <Paragraph>The content goes here</Paragraph>
      </Typography>
    </main>
  );
}
