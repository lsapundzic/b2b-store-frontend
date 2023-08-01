import { getSingleEntry } from "../data/getSingleEntry";
import Body from "../components/Body";

export default async function About() {
  const aboutPageID = "5wXQGH7Of5nYxWqPzLh8SM";

  console.log("About running...");
  const data = await getSingleEntry(aboutPageID);

  return (
    <main>
      <Body content={data} />
    </main>
  );
}
