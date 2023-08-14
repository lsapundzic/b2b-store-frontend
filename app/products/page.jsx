"use client";

// React imports
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project imports
import { pageStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Skeleton, Typography, Row, Col } from "antd";
import ProductCard from "../components/ProductCard";
import { ProductTypeEntriesURL } from "../utils/buildURL";
const { Title } = Typography;

function Products() {
  console.log("Products page rendered...");

  const { data, isLoading } = usePageContent(ProductTypeEntriesURL("product"));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Title>Products</Title>
      <Row
        gutter={{
          xs: 16,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {data.items.map((product) => (
          <Col
            key={product.sys.id}
            span={{
              xs: 24,
              sm: 12,
              md: 8,
              lg: 4,
            }}
          >
            <ProductCard
              entryID={product.sys.id}
              assetID={product.fields.image.sys.id}
              name={product.fields.name}
              fullName={product.fields.fullName}
              stock={product.fields.inStock}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
