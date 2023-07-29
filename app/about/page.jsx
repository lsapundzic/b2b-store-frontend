// Contentful client fetch
import { client } from "../contentful/client.js";

export default async function About() {
  console.log("About page running.....");

  const AboutPage = "5wXQGH7Of5nYxWqPzLh8SM";

  const result = await client.getEntry(AboutPage);

  console.log(result);

  return (
    <main>
      <h1>{result.fields.title}</h1>
      <p>{result.fields.body}</p>
    </main>
  );
}
