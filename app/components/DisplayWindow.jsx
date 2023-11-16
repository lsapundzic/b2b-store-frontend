"use client";

import useFilter from "@/app/hooks/useFilter";
import { Col, Row } from "antd";
import ProductCard from "@/app/components/ProductCard";

export default function DisplayWindow({ data, category }) {
  // Hook for filtering data
  const { filteredData } = useFilter(data, category);

  return (
    <div>
      <Row gutter={[32, 64]}>
        {/* For filtering products based on their category / navbar option */}
        {filteredData.map((product) => (
          <Col
            key={product.sys.id}
            span={{
              xs: 24,
              sm: 12,
              md: 8,
              lg: 4,
            }}
          >
            <ProductCard product={product} cardWidth={300} cardHeight={470} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
