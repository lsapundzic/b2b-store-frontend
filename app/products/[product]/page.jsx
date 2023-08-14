"use client";

// React imports
import { usePageContent } from "../../hooks/usePageContent.jsx";

// Project imports
import { pageStyle, textStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../utils/ImageAsset.jsx";

// AntD Imports
import { Empty, Skeleton, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  const { product } = params;
  console.log("Product page rendered...");

  const { data, isLoading } = usePageContent(SingleEntryURL(product));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>
          {data.fields.name} - {data.fields.fullName}
        </Title>
        <Paragraph style={textStyle}>{data.fields.description}</Paragraph>
        <ImageAsset
          assetID={data.fields.image.sys.id}
          width={350}
          height={450}
        />
      </Typography>
    </div>
  );
}
