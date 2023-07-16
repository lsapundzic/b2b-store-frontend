"use client";

// import { client } from "../lib/contentful/client.js";

export default async function About() {
  console.log("About page running....");

  const data = await getData();

  console.log(data);

  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
}

async function getData() {
  // About page ID
  // const pageID = "5wXQGH7Of5nYxWqPzLh8SM";
  // Get About page URL
  // const getSingleEntry = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/${pageID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

  const res = await fetch(`${getSingleEntry}`);

  if (!res.ok) {
    console.log("FETCH FAIL");
  } else {
    console.log(`FETCH SUCCESS`);
  }

  console.log(`FETCH FINISHED`);

  return res.json();
}
