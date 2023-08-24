"use client";

// Project
import ProductCard from "./ProductCard";
import filterProducts from "../utils/filterProducts";

// Antd
import { Row, Col } from "antd";

export default function ProductsOverview({ data, pageCategory }) {
  return (
    <div>
      {/* For filtering products based on their category / navbar option */}
      {filterProducts(data, pageCategory).map((product) => (
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
    </div>
  );
}
