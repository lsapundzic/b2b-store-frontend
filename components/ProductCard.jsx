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
import {Badge, Card, Divider, Typography} from "antd";

const {Title, Paragraph} = Typography;

export default function ProductCard({product, cardWidth, cardHeight}) {
    console.log("ProductCard rendered");

    return (
        <Link href={`/products/${product.sys.id}`}>
            <Badge.Ribbon
                text={product.fields.inStock ? "In stock" : "Out of Stock"}
                color={product.fields.inStock ? "blue" : "red"}
            >
                <Card
                    style={{width: `${cardWidth}px`, height: `${cardHeight}px`}}
                    hoverable
                    cover={
                        <ImageAsset
                            assetID={product.fields.image.sys.id}
                            height={"100%"}
                            width={250}
                            preview={false}
                        />
                    }
                >
                    <Divider/>
                    <Title level={3}>{product.fields.name}</Title>
                    <Paragraph ellipsis={(true, {rows: 2})}>
                        {product.fields.fullName}
                    </Paragraph>
                </Card>
            </Badge.Ribbon>
        </Link>
    );
}
