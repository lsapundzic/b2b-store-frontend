"use client";

// AntD imports
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Home() {
  console.log("Homepage running...");

  return (
    <main>
      <Typography>
        <Title>Homepage!</Title>
        <Title level={2}>Some Content</Title>
        <Paragraph>Lorem ipsum</Paragraph>
      </Typography>
    </main>
  );
}
