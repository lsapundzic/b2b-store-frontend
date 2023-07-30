export async function getData() {
  const res = await fetch(
    `https://api.whatdoestrumpthink.com/api/v1/quotes/random`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}
