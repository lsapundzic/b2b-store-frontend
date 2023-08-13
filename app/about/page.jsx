"use client";

import { Typography, Skeleton, Empty } from "antd";
const { Title, Paragraph } = Typography;

import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { usePageContent } from "../utils/hooks/usePageContent";
import { SingleEntryURL, ABOUT_ID } from "../utils/buildURL";

export default function About() {
  console.log("About page rendered...");

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
