"use client";

import { GET_ALL_ENTRIES } from "./requests";

export async function fetchData(entryID) {
  let url;

  if (entryID === 0) {
    url = GET_ALL_ENTRIES;
  } else {
    url = constructEntryURL(entryID);
  }

  // Broader scope error handling
  try {
    const response = await fetch(url);

    // Error handling only for HTTP response status
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. HTTP response status: ${response.status}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("General problem with fetching data. Error: ", error);
  }
}

// URL constructor separated from fetching for clarity
function constructEntryURL(entryID) {
  return `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
}
