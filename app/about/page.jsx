"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;

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
      <h2>{data.fields.title}</h2>
      <p>{data.fields.body}</p>
    </div>
  );
}
