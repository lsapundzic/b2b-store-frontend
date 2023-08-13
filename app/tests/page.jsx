// This is only for testing API and GET requests with SSR- no interface
import { client } from "../services/contentfulClient";

export default async function TestPage() {
  console.log("--- --- TESTING PLATFORM RUNNING --- ---");

  return (
    <main>
      <h1>PAGE FOR TESTING UI COMPONENTS & FUNCTIONALITY</h1>
      <h2>Nothing for you to see here, leave immediately</h2>
      <div>{/* <Image src={} alt="Some"></Image> */}</div>
    </main>
  );
}
