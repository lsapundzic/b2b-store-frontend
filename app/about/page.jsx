"use client";

import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // const testAPI = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/wzh8zqkwvm1v/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

    fetch(url)
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
      <p>{data.fields.title}</p>
    </div>
  );
}

export default About;
