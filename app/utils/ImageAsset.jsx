/*
Fetching an asset from Contentful is convoluted. 
- Page entries with which asset is associated with only have assetID in JSON
- AssetID is used create a url that fetches that specific asset JSON
- Inside of the asset JSON is a URL to the actual image

! There is a way to create image URL directly without fetching, but parameters are unclear or inconvenient
*/

"use client";

// React imports
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project imports
import { SingleAssetURL } from "./buildURL.jsx";

// AntD imports
import { Image, Skeleton, Empty } from "antd";

export default function ImageAsset({ assetID, width, height }) {
  const { data, isLoading } = usePageContent(SingleAssetURL(assetID));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div>
      <Image
        src={data.fields.file.url}
        alt={data.fields.description}
        width={width}
        height={height}
      />
    </div>
  );
}
