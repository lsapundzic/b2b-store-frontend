import Body from "./body";
import { getData } from "./getData";

export default async function About() {
  console.log("About running...");
  const data = await getData();

  console.log("Fetched data: ", data);

  console.log("Separate fetch test");
  console.log("------------------------------------");

  return (
    <main>
      <h1>Client + Separate fetch + client render in component</h1>
      <Body content={data} />
    </main>
  );
}
