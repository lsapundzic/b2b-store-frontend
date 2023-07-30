export async function getData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`
  );

  if (!res.ok) {
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}
