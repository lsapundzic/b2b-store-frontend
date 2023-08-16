"use client";

// Custom hooks
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project imports
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { ABOUT_ID, SingleEntryURL } from "../utils/buildURL";

// AntD imports
import { Empty, Skeleton, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function About() {
  console.log("About.jsx rendered");

  const { data, isLoading } = usePageContent(SingleEntryURL(ABOUT_ID));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>{data.fields.title}</Title>
        <Paragraph style={textStyle}>{data.fields.body}</Paragraph>
      </Typography>
    </div>
  );
}
