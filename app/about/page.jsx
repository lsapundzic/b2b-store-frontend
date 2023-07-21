const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  environment: "master",
  accessToken: process.env.DELIVERY_ACCESS_TOKEN,
});

// client
//   .getEntry("5wXQGH7Of5nYxWqPzLh8SM")
//   .then((entry) => console.log("Display data:", entry.fields.title))
//   .catch(console.error);

const entry = await client.getEntry("5wXQGH7Of5nYxWqPzLh8SM");
console.log(entry);

export default function About() {
  console.log("About page running.....");

  return (
    <main>
      <h1>{entry.fields.title}</h1>
      <p>{entry.fields.body}</p>
    </main>
  );
}
