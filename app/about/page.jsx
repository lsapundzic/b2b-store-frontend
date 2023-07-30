async function getData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/wzh8zqkwvm1v/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}

export default async function About() {
  const data = await getData();

  console.log("Fetched data: ", data);

  return (
    <main>
      <h1>About</h1>
      <p>
        The following is the fetched on the server side - sign - :{" "}
        {data.fields.body}
      </p>
    </main>
  );
}
