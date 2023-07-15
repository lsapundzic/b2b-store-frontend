// ! Check if exporting functions and fetching data from remote folder is OK

const baseURL = `https://cdn.contentful.com`;

// Content types
const getSpace = `${baseURL}/spaces/${process.env.SPACE_ID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const getContentModel = `${baseURL}/spaces/${process.env.SPACE_ID}/environments/master/content_types?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const getContentType = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/content_types/staticPages?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

// Entries
// Get all entries of a space
const getAllEntries = `${baseURL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

const fetchType = [getSpace, getContentModel, getContentType];

async function getData() {
  const res = await fetch(`${getAllEntries}`);

  if (!res.ok) {
    console.log(`FETCH FAIL`);
  } else {
    console.log(`FETCH SUCCESS`);
  }

  console.log(`FETCH FINISHED`);

  return res.json();
}

export default getData;
