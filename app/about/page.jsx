"use client";

// Custom hooks
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project imports
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { SingleEntryURL, ABOUT_ID } from "../utils/buildURL";

// AntD imports
import { Typography, Skeleton, Empty } from "antd";
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
