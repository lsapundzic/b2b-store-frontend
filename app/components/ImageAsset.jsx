/*
Fetching an asset from Contentful is convoluted. 
- Entries with which asset is associated with only contain assetID, not the direct URL
- AssetID is used create another URL that fetches that specific asset data
- Inside of the asset data is the URL to the actual image

Asset retreival procedure ends up being the same like for an entry. Get the ID, generate URL, fetch data according to the url

! There is a way to create image URL directly without fetching, but parameters are unclear or inconvenient
TODO: Consider making this a custom hook
*/

"use client";

// React imports
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project imports
import { AssetURL } from "../utils/buildURL.jsx";

// AntD imports
import { Image, Skeleton, Empty } from "antd";

export default function ImageAsset({ assetID, width, height, preview }) {
  const { data, isLoading } = usePageContent(AssetURL(assetID));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div>
      <Image
        src={data.fields.file.url}
        alt={data.fields.description}
        width={width}
        height={height}
        preview={preview}
      />
    </div>
  );
}
