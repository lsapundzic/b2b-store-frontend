"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { ABOUT_ID } from "../services/requests";

// AntD Imports
import { Empty, Skeleton } from "antd";

function About() {
  console.log("About page rendered...");
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

  return (
    <div>
      <h1>Client Side API Fetch</h1>
      <h2>{data.fields.title}</h2>
      <p>{data.fields.body}</p>
    </div>
  );
}

export default About;
