import { getSingleEntry } from "../data/getSingleEntry";
import Body from "../components/Body";

export default async function About() {
  const testenv = process.env.ABOUT_PAGE_ID;

  console.log("About running...");
  const data = await getSingleEntry("5wXQGH7Of5nYxWqPzLh8SM");

  return (
    <main>
      <h1>The env is:{testenv} </h1>

      <Body content={data} />
    </main>
  );
}
