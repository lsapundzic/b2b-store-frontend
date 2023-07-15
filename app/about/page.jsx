// Fetching data
// async function getData() {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );

//   // Checking if the fetch is OK
//   if (!res.ok) {
//     console.log("Error fetching data");
//   }

//   // Function returns a JSON file of the fetch
//   return res.json();
// }

async function getData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
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
