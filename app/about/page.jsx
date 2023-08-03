"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { ABOUT_ID } from "../services/requests";

// AntD Imports
import { Empty, Skeleton, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

function About() {
  console.log("About page rendered...");

  // For holding fetched data and loading state
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(ABOUT_ID)
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log("Data fetched ", data);
      })
      .catch((error) => {
        console.log("An error has interfered somewhere");
      });
  }, []);

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  const pageStyle = {
    paddingLeft: 50,
    paddingRight: 50,
  };

  const textStyle = {
    lineHeight: 2,
  };

  return (
    <div style={pageStyle}>
      <Typography>
        <Title>{data.fields.title}</Title>
        <Paragraph style={textStyle}>{data.fields.body}</Paragraph>
      </Typography>
    </div>
  );
}

export default About;
