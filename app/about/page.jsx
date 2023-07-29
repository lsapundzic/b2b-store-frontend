"use client";

import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // const testAPI = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

  useEffect(() => {
    const spaceid = process.env.NEXT_PUBLIC_SPACE_ID;
    console.log("space id is: ", spaceid);

    const url = `https://cdn.contentful.com/spaces/${spaceid}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

    fetch(url)
      .then((resolve) => resolve.json())
      .then((fetched) => {
        setData(fetched);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data fetched</p>;

  console.log(data);

  return (
    <div>
      <h1>Client Side API Fetch</h1>
      <h2>Does it work?</h2>
      <p>{data.fields.title}</p>
    </div>
  );
}

export default About;
