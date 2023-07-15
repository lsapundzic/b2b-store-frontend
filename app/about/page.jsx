import ContentFetch from "../api/content-types";

export default async function About() {
  console.log("About page running...");

  const data = await ContentFetch(2);

  console.log(data);

  return (
    <main>
      <h1>Testing API calls</h1>
      <p>Some contenet goes heere</p>
    </main>
  );
}
