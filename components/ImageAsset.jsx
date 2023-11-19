/*
Fetching an asset from Contentful is convoluted. 
- Entries with which asset is associated with only contain assetID, not the direct URL
- AssetID is used create another URL that fetches that specific asset data
- Inside the asset data is the URL to the actual image

Asset retrieval procedure ends up being the same as for an entry. Get the ID, generate URL, fetch data according to the url

! There is a way to create image URL directly without fetching, but parameters are unclear or inconvenient
*/

"use client";

// React imports
import {useFetchData} from "../app/hooks/useFetchData";

// Project imports
import {AssetURL} from "../app/utils/buildURL.jsx";

// AntD imports
import {Image} from "antd";
import CustomSkeleton from "./CustomSkeleton.jsx";
import CustomEmpty from "./CustomEmpty.jsx";

export default function ImageAsset({assetID, width, height, preview}) {
    const {data, isLoading} = useFetchData(AssetURL(assetID));

    if (isLoading) return <CustomSkeleton/>;
    if (!data) return <CustomEmpty/>;

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
