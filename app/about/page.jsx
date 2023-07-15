// import FetchData from "../api/fetchData";

const baseURL = `https://cdn.contentful.com`;
const getAllEntries = `${baseURL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const getSingleEntry = `${baseURL}/spaces/${process.env.SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

async function getData() {
  const res = await fetch(`${getSingleEntry}`);

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

  console.log(data);

  // const title = data.fields.title;
  // const body = data.fields.body;

  return (
    <main>
      {/* <h1>{title}</h1>
      <p>{body}</p> */}
    </main>
  );
}
