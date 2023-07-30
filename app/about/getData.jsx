export async function getData() {
  const space = `wzh8zqkwvm1v`;

  console.log("What is space ID? ", space);

  const urlHolder = `https://cdn.contentful.com/spaces/${space}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

  const res = await fetch(urlHolder);

  if (!res.ok) {
    throw new Error("--- Failed to fetch data ---");
  }

  return res.json();
}
