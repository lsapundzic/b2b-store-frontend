"use client";

export function fetchData(entryID) {
  const url = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;

  return fetch(url).then((res) => res.json());
}
