// import getData from "../api/fetchData";

const baseURL = `https://cdn.contentful.com`;
const getAllEntries = `${baseURL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

async function getData() {
  const res = await fetch(`${getAllEntries}`);

  if (!res.ok) {
    console.log(`FETCH FAIL`);
  } else {
    console.log(`FETCH SUCCESS`);
  }

  console.log(`FETCH FINISHED`);

  return res.json();
}

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
