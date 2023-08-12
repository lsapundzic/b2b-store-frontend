"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Image, Skeleton, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  console.log("Product page rendered...");
  // This is the product ID passed from the ProductCard.jsx
  const { product } = params;

  // For holding fetched data and loading state
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(product)
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log("Data fetched ", data);
      })
      .catch((error) => {
        console.error("Failure to fetch data.", error);
      });
  }, [product]);

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>
          {data.fields.name} - {data.fields.fullName}
        </Title>
        <Paragraph style={textStyle}>{data.fields.description}</Paragraph>
        <Image
          alt={`Image of ${data.fields.name} ${data.fields.fullName}`}
          src="https://placekitten.com/640/360"
        ></Image>
      </Typography>
    </div>
  );
}
