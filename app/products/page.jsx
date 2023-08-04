"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { CONTACT_ID } from "../services/requests";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Skeleton, Typography } from "antd";
const { Title, Paragraph } = Typography;

function Products() {
  console.log("Products page rendered...");

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
        console.log("Error fetching data in Products.jsx");
      });
  }, []);

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>Products We Offer</Title>
      </Typography>
    </div>
  );
}

export default Products;
