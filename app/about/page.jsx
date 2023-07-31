import Body from "../components/Body";
import { getData } from "./getData";

export default async function About() {
  console.log("About running...");
  const data = await getData("5wXQGH7Of5nYxWqPzLh8SM");

  return (
    <main>
      <Body content={data} />
    </main>
  );
}
