"use client";

// Next Imports
import Link from "next/link";

// AntD Imports
import { Typography, Image, Card, Badge } from "antd";
import ImageAsset from "../utils/ImageAsset";
const { Title, Paragraph } = Typography;

export default function ProductCard({
  entryID,
  assetID,
  name,
  fullName,
  stock,
}) {
  return (
    <Card
      style={{ width: 300 }}
      hoverable
      cover={<ImageAsset assetID={assetID} height={320} width={240} />}
    >
      <Link href={`/products/${entryID}`}>
        <Badge status="success" text="In stock" />
        <Title level={3}>{name}</Title>
        <Paragraph>{fullName}</Paragraph>
      </Link>
    </Card>
  );
}

// "https://loremflickr.com/320/240"
