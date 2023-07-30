"use client";

import { getData } from "./getData";

export default async function About() {
  console.log("About running...");
  const data = await getData();

  console.log("Fetched data: ", data);

  console.log("Separate fetch test");
  console.log("------------------------------------");

  return (
    <main>
      <h1>Client + Separate fetch + env var</h1>
      <h2>{data.fields.title}</h2>
      <p>
        A server-side fetch has been performed, and page has been rendered on
        client: {data.fields.body}
      </p>
    </main>
  );
}
