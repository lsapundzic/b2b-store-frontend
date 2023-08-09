"use client";

import { BASE_URL, GET_ALL_ENTRIES } from "./requests";

export async function fetchData(entryID) {
  let url;

  if (entryID === 0) {
    url = GET_ALL_ENTRIES;
  } else {
    url = constructEntryURL(entryID);
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// URL constructor separated from fetching for clarity
function constructEntryURL(entryID) {
  return `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
}
