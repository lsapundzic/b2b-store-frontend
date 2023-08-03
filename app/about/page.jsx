"use client";

import React, { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";

function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.fields.title}</h1>
      <p>{data.fields.body}</p>
    </div>
  );
}

export default About;
