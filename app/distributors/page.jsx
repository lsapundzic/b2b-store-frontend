"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { DISTRIBUTORS_ID, SingleEntryURL } from "../utils/buildURL";
import { PageCategoryContext } from "../layout.js";
import CustomSkeleton from "../components/CustomSkeleton.jsx";
import CustomEmpty from "../components/CustomEmpty.jsx";
import CustomBanner from "../components/CustomBanner.jsx";
import TeamMembers from "../components/TeamMembers.jsx";

// AntD
import { Col, Divider, Image, Row, Typography } from "antd";
import Certificates from "../components/Certificates.jsx";
const { Title, Paragraph } = Typography;

export default function About() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useDataRetriever(SingleEntryURL(DISTRIBUTORS_ID));

  if (isLoading)
    return (
      <div style={pageStyle}>
        <CustomSkeleton />
      </div>
    );
  if (!data) return <CustomEmpty />;

  return (
    <div style={pageStyle}>
      <Title>{data.fields.title}</Title>
      <Paragraph>{data.fields.body}</Paragraph>
    </div>
  );
}
