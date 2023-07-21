const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  environment: "master",
  accessToken: process.env.DELIVERY_ACCESS_TOKEN,
});

client
  .getEntry("5wXQGH7Of5nYxWqPzLh8SM")
  .then((entry) => {
    console.log(entry);
    // const localStorage = entry;
  })
  .catch(console.error);

export default async function About() {
  console.log("About page running.....");

  return (
    <main>
      <h1>About Page</h1>
      <p>Testing server side</p>
    </main>
  );
}
