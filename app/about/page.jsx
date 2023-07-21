"use client";

// import { client } from "../lib/contentful/client.js";

export default async function About() {
  console.log("About page running....");

  // * Trying to fetch data with the latest NextJS functions
  // ! This method used to work, and at some point it just decided not to.

  async function getData() {
    // About page ID
    const pageID = "5wXQGH7Of5nYxWqPzLh8SM";

    // Get About page URL
    const getSingleEntry = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/${pageID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

    const res = await fetch(`${getSingleEntry}`);

    if (!res.ok) {
      // * Throwing errors is better than console.log it prevents the re-fetch (not completely)
      throw new Error("Failed to fetch data");
    } else {
      console.log(`FETCH SUCCESS`);
    }

    console.log(`Fetch process finished`);

    return res.json();
  }

  const data = await getData();

  console.log("The fetched data is: ", data);

  console.log("Process Complete");

  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
}
