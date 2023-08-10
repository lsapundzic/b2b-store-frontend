"use client";

// AntD Imports
import { Typography, Card, Image } from "antd";
const { Title, Paragraph } = Typography;

export default function ProductCard({ productID, name, description }) {
  return (
    <Card
      style={{ width: 300 }}
      hoverable
      cover={
        <Image
          alt={`Product image of ${name}`}
          src="https://loremflickr.com/320/240"
        />
      }
    >
      <Title level={3}>{name}</Title>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
}
