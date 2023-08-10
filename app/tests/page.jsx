// This is only for testing API and GET requests with SSR- no interface

import {
  GET_ALL_ENTRIES,
  GET_CONTENT_MODEL,
  GET_CONTENT_TYPE,
  GET_CONTENT_TYPE_ENTRIES,
  GET_SPACE,
} from "../services/requests";

// Fetching data on the server side
export async function dataFetch(fetchMe) {
  const res = await fetch(fetchMe);

  if (!res.ok) {
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}

export default async function TestPage() {
  console.log("--- --- TESTING PLATFORM RUNNING --- ---");
  const time = new Date();
  const now = `Action on: ${time.getHours()}H ${time.getMinutes()}M ${time.getSeconds()}S`;

  const data = await dataFetch(GET_CONTENT_TYPE_ENTRIES);

  console.log(now, "--- Fetched data: --- ", data);

  console.log("Filter", data.items);

  console.log("------------------------------------");

  return (
    <main>
      <h1>Testing Data Fetch</h1>
      <div></div>
    </main>
  );
}
