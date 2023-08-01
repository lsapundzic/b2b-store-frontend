import { getSingleEntry } from "../data/getSingleEntry";
import Body from "../components/Body";

export default async function About() {
  console.log("About running...");
  const data = await getSingleEntry("5wXQGH7Of5nYxWqPzLh8SM");

  return (
    <main>
      <Body content={data} />
    </main>
  );
}
