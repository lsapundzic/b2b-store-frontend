import getData from "../api/fetchData";

export default async function About() {
  console.log("About page running...");

  const data = await getData();

  console.log(data.items[0]);

  const pageTitle = data.items[0].fields.title;
  const pageBody = data.items[0].fields.body;

  return (
    <main>
      <h1>{pageTitle}</h1>
      <p>{pageBody}</p>
    </main>
  );
}
