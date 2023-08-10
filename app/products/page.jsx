"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { CONTACT_ID } from "../services/requests";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Skeleton, Typography, Card } from "antd";
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

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>All Products</Title>
        {data.items.map((product, index) => (
          <Card key={index} style={{ width: 300 }}>
            <p>{product.fields.name}</p>
            <p>{product.fields.description}</p>
          </Card>
        ))}
      </Typography>
    </div>
  );
}

export default Products;
