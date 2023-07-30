export async function getData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/wzh8zqkwvm1v/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`
  );

  if (!res.ok) {
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}
