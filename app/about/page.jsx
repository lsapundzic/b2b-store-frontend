import Body from "../components/Body";
import { getData } from "./getData";

export default async function About() {
  console.log("About running...");
  const data = await getData();

  console.log("--- FETCHED DATA: ", data);
  console.log("------------------------------------");

  return (
    <main>
      <h1>Client + Separate fetch + local env attempt</h1>
      <div>
        Rendering data from the server:
        <p>{data.fields.body}</p>
      </div>
      <div>
        Rendering data from the client:
        {/* <Body content={data} /> */}
      </div>
    </main>
  );
}
