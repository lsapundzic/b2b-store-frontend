/*
Fetching an asset from Contentful is convoluted. 
- Page entries with which asset is associated with only have assetID in JSON
- AssetID is used create a url that fetches that specific asset JSON
- Inside of the asset JSON is a URL to the actual image

! There is a way to create image URL directly without fetching, but parameters are unclear or inconvenient
*/

"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { SingleAssetURL } from "./buildURL";

// AntD imports
import { Image, Skeleton } from "antd";

export default function ImageGenerator({ assetID }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(SingleAssetURL(assetID))
      .then((data) => {
        setData(data);
        console.log(
          "Data fetched inside of the ImageGenerator component: ",
          data
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Failure to fetch data inside of the ImageGenerator component.",
          error
        );
      });
  }, [assetID]);

  if (isLoading) return <Skeleton active />;

  return (
    <div>
      <Image
        src={data.fields.file.url}
        alt={data.fields.description}
        // width={400}
        // height={600}
      />
    </div>
  );
}
