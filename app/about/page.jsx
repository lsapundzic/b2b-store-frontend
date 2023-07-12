async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  // if (!res.ok) {
  //   throw new Error("Custom error message: data fetching failed");
  // }

  return res.json();
}

export default async function About() {
  console.log("About page running...");

  const data = await getData();

  console.log(data);

  console.log("Attempt OK");
  return (
    <main>
      <h1>Testing API calls</h1>
    </main>
  );
}
