/*
- ProductCard component receives data of an individual product from Products.jsx
- entryID is used to generate a slug that will lead to specific entry
- assetID is used to generate a product image through the use of ImageAsset component
*/

"use client";

// React imports
import Link from "next/link";

// Project imports
import ImageAsset from "./ImageAsset";

// AntD imports
import { Badge, Card, Space, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function ProductCard({
  entryID,
  assetID,
  name,
  fullName,
  stockStatus,
  cardWidth,
  cardHeight,
}) {
  console.log(`ProductsCard ${name} rendered`);

  return (
    <Link href={`/products/${entryID}`}>
      <Badge.Ribbon
        text={stockStatus ? "In stock" : "Not in stock"}
        color={stockStatus ? "blue" : "red"}
      >
        <Card
          style={{ width: `${cardWidth}px`, height: "100%" }}
          hoverable
          cover={
            <ImageAsset
              assetID={assetID}
              height={cardHeight}
              width={cardWidth}
              preview={false}
            />
          }
        >
          <Title level={3}>{name}</Title>
          <Paragraph ellipsis={(true, { rows: 2 })}>{fullName}</Paragraph>
        </Card>
      </Badge.Ribbon>
    </Link>
  );
}
