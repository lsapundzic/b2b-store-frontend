"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { CONTACT_ID } from "../services/requests";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Skeleton, Typography, Card, Image, Row, Col } from "antd";
const { Title, Paragraph } = Typography;

function Products() {
  console.log("Products page rendered...");

  // For holding fetched data and loading state
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(0)
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

  // ! For development purposes
  console.log("All the products: ", data.items);

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
        {data.items.map((product, index) => (
          <Col
            key={index}
            span={{
              xs: 24,
              sm: 12,
              md: 8,
              lg: 4,
            }}
          >
            <Card
              // key={index}
              style={{ width: 300 }}
              hoverable
              cover={
                <Image
                  alt="product image"
                  src="https://loremflickr.com/320/240"
                />
              }
            >
              <Title level={3}>{product.fields.name}</Title>
              <Paragraph>{product.fields.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
