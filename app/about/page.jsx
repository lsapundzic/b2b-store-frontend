// "use client";

import { client } from "../contentful/client.js";
import StaticContent from "../components/StaticContent";
import { ABOUT_ID } from "../utils/settings";

export default async function About() {
  console.log("About page rendered...");

  const result = await client.getEntry(ABOUT_ID);

  console.log(result);

  return (
    <main>
      <h1>{result.fields.title}</h1>
    </main>
  );
}
