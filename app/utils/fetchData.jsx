"use client";

export function fetchData() {
  const url = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

  return fetch(url).then((res) => res.json());
}
