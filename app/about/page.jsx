"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { ABOUT_ID, SingleEntryURL } from "../utils/buildURL";
import { PageCategoryContext } from "../layout.js";
import CustomSkeleton from "../components/CustomSkeleton.jsx";

// AntD
import { Typography } from "antd";
import CustomEmpty from "../components/CustomEmpty.jsx";

const { Title, Paragraph } = Typography;

export default function About() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useDataRetriever(SingleEntryURL(ABOUT_ID));

  if (isLoading) return <CustomSkeleton />;
  if (!data) return <CustomEmpty />;

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>{data.fields.title}</Title>
        <Paragraph style={textStyle}>{data.fields.body}</Paragraph>
      </Typography>
    </div>
  );
}
