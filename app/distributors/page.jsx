"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { DISTRIBUTORS_ID, SingleEntryURL } from "../utils/buildURL";
import MainLayout, { PageCategoryContext } from "../components/MainLayout.jsx";
import CustomSkeleton from "../components/CustomSkeleton.jsx";

// AntD
import { Typography } from "antd";
import CustomTabs from "../components/CustomTabs.jsx";

const { Title, Paragraph } = Typography;

export default function About() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useDataRetriever(SingleEntryURL(DISTRIBUTORS_ID));

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <Title>{data.fields.title}</Title>
            <Paragraph>{data.fields.body}</Paragraph>
            <CustomTabs
              leftTabTltle={"Become a Distributor"}
              leftTabDescription={data.fields.body}
              rightTitle={"Find Distributors"}
              rightDetals={"List of distributors"}
            />
          </>
        )}
      </div>
    </MainLayout>
  );
}
