import { client } from "../services/contentfulClient";

const apiUrl = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

export async function fetchData() {
  const AboutPage = "5wXQGH7Of5nYxWqPzLh8SM";

  const result = await client.getEntry(AboutPage);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
