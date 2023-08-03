"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { CONTACT_ID } from "../services/requests";
import { pageStyle, textStyle } from "../styles/globalStyles";
import ProductPreview from "../components/ProductPreview";

// AntD Imports
import { Empty, Skeleton, Typography } from "antd";
const { Title, Paragraph } = Typography;

function Products() {
  console.log("Contact page rendered...");

  // For holding fetched data and loading state
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(CONTACT_ID)
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log("Data fetched ", data);
      })
      .catch((error) => {
        console.log("An error has interfered somewhere");
      });
  }, []);

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>Products</Title>
        <Title level={2}>{data.fields.title}</Title>
        <ProductPreview />
      </Typography>
    </div>
  );
}

export default Products;
