"use client";

// React
import { usePageContent } from "../hooks/usePageContent.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { ABOUT_ID, AllEnatriesURL } from "../utils/buildURL";
import { PageContext } from "../layout.js";

// AntD
import { Empty, Skeleton, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Test() {
  let { page } = useContext(PageContext);
  console.log(`${page} rendered`);

  const { data, isLoading } = usePageContent(AllEnatriesURL());

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  console.log("Fetched data: ", data);

  return (
    <div style={pageStyle}>
      <Typography>
        {/* <Title>{data.fields.title}</Title>
        <Paragraph style={textStyle}>{data.fields.body}</Paragraph> */}
      </Typography>
    </div>
  );
}
