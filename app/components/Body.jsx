"use client";

// AntD imports
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Body({ content }) {
  console.log("Body running...");
  return (
    <main>
      <Typography>
        <Title>{content.fields.title}</Title>
        <Title level={2}>Some Content</Title>
        <Paragraph>{content.fields.body}</Paragraph>
      </Typography>
    </main>
  );
}
