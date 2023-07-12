// Fetching data
async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  // Checking if the fetch is OK
  if (!res.ok) {
    console.log("Error fetching data");
  }

  // Function returns a JSON file of the fetch
  return res.json();
}

export default async function About() {
  console.log("About page running...");

  const data = await getData();

  return (
    <main>
      <h1>Testing API calls</h1>
    </main>
  );
}
