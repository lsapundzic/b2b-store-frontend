const apiUrl = `https://cdn.contentful.com/spaces/wzh8zqkwvm1v/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

export async function fetchData() {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
