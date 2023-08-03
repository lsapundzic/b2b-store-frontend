"use client";

export function fetchData(entryID) {
  const url = `https://cdn.contentful.com/spaces/wzh8zqkwvm1v/environments/master/entries/${entryID}?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

  return fetch(url).then((res) => res.json());
}
