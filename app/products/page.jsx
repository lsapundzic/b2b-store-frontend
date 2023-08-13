"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Skeleton, Typography, Card, Image, Row, Col } from "antd";
import ProductCard from "../components/ProductCard";
import { ProductTypeEntriesURL } from "../utils/buildURL";
const { Title, Paragraph } = Typography;

function Products() {
  console.log("Products page rendered...");

  // For holding fetched data and loading state
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(ProductTypeEntriesURL("product"))
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log("Data fetched: ", data);
      })
      .catch((error) => {
        console.error("Failure to fetch data.", error);
      });
  }, []);

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
              id={product.sys.id}
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
