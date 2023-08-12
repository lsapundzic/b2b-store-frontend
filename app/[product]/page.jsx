"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Image, Skeleton, Typography } from "antd";
import { BuildSingleAssetURL, BuildSingleEntryURL } from "../services/buildURL";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  console.log("Product page rendered...");
  const { product } = params;

  // For holding page content
  const [data, setData] = useState(null);
  const [asset, setAsset] = useState(null);

  // For toggling general loading status
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch page content
    fetchData(BuildSingleEntryURL(product))
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

  // const myimage = data.fields.image.sys.id;
  // const imageurl = BuildSingleAssetURL(myimage);
  // console.log("Accessing image: ", imageurl);

  // console.log("-----Asset fetched: ", asset);

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>
          {data.fields.name} - {data.fields.fullName}
        </Title>
        <Paragraph style={textStyle}>{data.fields.description}</Paragraph>
        <Image
          preview="false"
          alt={`Image of ${data.fields.name} ${data.fields.fullName}`}
          src="https://placekitten.com/640/360"
        ></Image>
      </Typography>
    </div>
  );
}
