import getData from "../api/fetchData";

export default async function About() {
  console.log("About page running...");

  const data = await getData(2);

  console.log(data.sys);

  return (
    <main>
      <h1>Testing API calls</h1>
      <p>Some contenet goes heere</p>
    </main>
  );
}
