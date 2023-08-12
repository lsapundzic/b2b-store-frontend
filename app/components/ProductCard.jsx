"use client";

// AntD Imports
import { Typography, Card, Image, Badge } from "antd";
import Link from "next/link";
const { Title, Paragraph } = Typography;

export default function ProductCard({ id, name, fullName, stock }) {
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
      <Link href={`/${id}`}>
        <Badge status="success" text="In stock" />
        <Title level={3}>{name}</Title>
        <Paragraph>{fullName}</Paragraph>
      </Link>
    </Card>
  );
}
