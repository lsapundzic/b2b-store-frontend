import { client } from "../lib/contentful/client.js";

export default async function About() {
  const entryID = "5wXQGH7Of5nYxWqPzLh8SM";

  console.log("About page running....");
  client
    .getEntry(`${entryID}`)
    .then((entry) => console.log(entry))
    .catch(console.error);

  return (
    <main>
      <h1>Some Title</h1>
      <p>Some content right here</p>
    </main>
  );
}

// export const getStaticProps = async () => {
//   console.log("Get props");
//   const response = await client.getEntries({ content_type: "staticPages" });

//   if (!response.ok) {
//     console.log("Error fetching data");
//   } else {
//     console.log("Fetch success");
//     console.log(response);
//   }

//   return {
//     props: {
//       pages: response.items,
//       revalidated: 60,
//     },
//   };
// };
