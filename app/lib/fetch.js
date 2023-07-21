// This fetch is according ot the recommendation by the latest NextJS documentation: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

// ! This is a NextJS fetch, it is presently not used

async function getData() {
  // Get About page URL
  const getSingleEntry = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

  const res = await fetch(`${getSingleEntry}`);

  if (!res.ok) {
    console.log(`FETCH FAIL`);
  } else {
    console.log(`FETCH SUCCESS`);
  }

  console.log(`FETCH FINISHED`);

  return res.json();
}
