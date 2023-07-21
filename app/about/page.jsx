import { client } from "../lib/contentful/client";

export default async function Page({ repo }) {
  console.log("About running...");

  const entry = await client.getEntry("5wXQGH7Of5nYxWqPzLh8SM");
  console.log(entry);

  console.log("Repo content: ", repo);
  return (
    <main>
      <h1>{entry.fields.title}</h1>
      <h2>Some content here</h2>
    </main>
  );
}

// export const getStaticProps = async () => {
//   let repo;

//   client
//     .getEntry("<entry_id>")
//     .then((entry) => {})
//     .catch(console.error);

//   return {
//     props: { repo },
//   };
// };
