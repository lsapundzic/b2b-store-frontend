"use client";

import { client } from "../contentful/client.js";
import StaticContent from "../components/StaticContent";
import { ABOUT_ID } from "../utils/settings";

export default async function About() {
  console.log("About page rendered...");

  client
    .getEntry(ABOUT_ID)
    .then((entry) => setData(entry))
    .catch(console.error("--- --- --- ERROR FETCHING DATA --- --- ---"));

  return (
    <main>
      <h1>{data.title}</h1>
    </main>
  );
}
