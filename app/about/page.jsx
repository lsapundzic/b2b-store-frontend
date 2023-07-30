import { getData } from "./getData";

export default async function About() {
  console.log("About running...");
  const data = await getData();

  console.log("Fetched data: ", data);

  console.log("Separate fetch?");

  return (
    <main>
      <h1>About</h1>
      <p>
        The following is the fetched on the server side - separate! - :{" "}
        {data.fields.body}
      </p>
    </main>
  );
}
