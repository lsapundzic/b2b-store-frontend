"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { pageStyle, textStyle } from "../styles/globalStyles";
import { SingleEntryURL, ABOUT_ID } from "../utils/buildURL";

// AntD imports
import { Empty, Skeleton, Typography } from "antd";
import abstractFetch from "../utils/AbstractFetch";
const { Title, Paragraph } = Typography;

export default function About() {
  console.log("About page rendered...");

  const [data, setData] = useState();

  useEffect(() => {}, []);

  return (
    <div style={pageStyle}>
      <Typography>
        {/* <Title>{data.data.fields.title}</Title> */}
        {/* <Paragraph style={textStyle}>{data.fields.body}</Paragraph> */}
      </Typography>
    </div>
  );
}
