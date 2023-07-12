export default async function Home() {
  const data = fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  console.log(res);

  return (
    <main>
      <h1>Testing Fetch!</h1>
    </main>
  );
}
