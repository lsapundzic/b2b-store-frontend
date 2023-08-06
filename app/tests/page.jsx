// This is only for testing API and GET requests with SSR- no interface

// Fetching data on the server side
export async function dataFetch() {
  const testURL = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;

  const res = await fetch(testURL);

  if (!res.ok) {
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}

export default async function Test() {
  console.log("--- --- TESTING PLATFORM RUNNING --- ---");
  const data = await dataFetch();

  console.log("Fetched data: ", data);

  console.log("------------------------------------");

  return (
    <main>
      <h1>Testing Data Fetch</h1>
    </main>
  );
}
