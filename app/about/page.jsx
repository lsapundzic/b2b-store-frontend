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

const master = `master`;
const getSpace = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const getContentModel = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${master}/content_types?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

async function getData() {
  const res = await fetch(`${getContentModel}`);

  if (!res.ok) {
    console.log("Error fetching data");
  } else {
    console.log("Fetch OK?");
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
      <p>Some contenet goes heere</p>
    </main>
  );
}
