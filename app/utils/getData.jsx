export async function getData(singleEntryID) {
  const singleEntryURL = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/${singleEntryID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

  const res = await fetch(singleEntryURL);

  if (!res.ok) {
    throw new Error("Error message: failed to fetch data");
  }

  return res.json();
}
