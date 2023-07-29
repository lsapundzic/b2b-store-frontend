"use client";

import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const testURL = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/content_types/staticPages?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

  useEffect(() => {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>Client Side API Fetch</h1>
      <h2>Does it work?</h2>
      <p>{data.message}</p>
    </div>
  );
}

export default About;
