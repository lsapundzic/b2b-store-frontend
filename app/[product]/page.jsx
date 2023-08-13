"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { pageStyle, textStyle } from "../styles/globalStyles";
import { SingleAssetURL, SingleEntryURL } from "../utils/buildURL";

// AntD Imports
import { Empty, Skeleton, Typography } from "antd";
import ImageGenerator from "../utils/ImageGenerator";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  console.log("Product page rendered...");
  const { product } = params;

  const [data, setData] = useState(null);

  // For toggling general loading status
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch page content
    fetchData(SingleEntryURL(product))
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
        <ImageGenerator assetID={data.fields.image.sys.id} />
      </Typography>
    </div>
  );
}
