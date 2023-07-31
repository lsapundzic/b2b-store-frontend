import Body from "../components/Body";
import { getData } from "./getData";

export default async function About() {
  console.log("About running...");
  const data = await getData();

  console.log("--- FETCHED DATA: ", data);

  return (
    <main>
      <Body content={data} />
    </main>
  );
}
