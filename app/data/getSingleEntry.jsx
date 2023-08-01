export async function getSingleEntry(singlePage) {
  const urlHolder = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/${singlePage}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

  const res = await fetch(urlHolder);

  if (!res.ok) {
    throw new Error("--- Failed to fetch data ---");
  }

  return res.json();
}
