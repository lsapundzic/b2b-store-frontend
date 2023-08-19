"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { ABOUT_ID, SingleEntryURL } from "../utils/buildURL";
import { GlobalDataAccessContext, PageCategoryContext } from "../layout.js";

// AntD
import { Empty, Skeleton, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function About() {
  // let { pageCategory } = useContext(PageCategoryContext);
  // console.log(`${pageCategory} rendered`);

  // const { data, isLoading } = useDataRetriever(SingleEntryURL(ABOUT_ID));

  // if (isLoading) return <Skeleton active />;
  // if (!data) return <Empty />;

  let { data, isLoading } = useContext(GlobalDataAccessContext);

  console.log("Data received in about page: ", data);
  // const aboutPage = data.find

  return (
    <div style={pageStyle}>
      <Typography>
        {/* <Title>{data.fields.title}</Title>
        <Paragraph style={textStyle}>{data.fields.body}</Paragraph> */}
      </Typography>
    </div>
  );
}
