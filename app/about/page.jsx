async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    console.log("Error fetching data");
  }

  return res.json();
}

export default async function About() {
  console.log("About page running...");

  const data = await getData();

  console.log(data);
  return (
    <main>
      <h1>Testing API calls</h1>
    </main>
  );
}
