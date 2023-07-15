// ! Check if exporting functions and fetching data from remote folder is OK

const baseURL = `https://cdn.contentful.com`;

const getSpace = `${baseURL}/spaces/${process.env.SPACE_ID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const getContentModel = `${baseURL}/spaces/${process.env.SPACE_ID}/environments/master/content_types?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const getContentType = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/content_types/staticPages?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

const fetchType = [getSpace, getContentModel, getContentType];

async function FetchContentTypes(fetchRequest) {
  const res = await fetch(fetchType[fetchRequest]);

  if (!res.ok) {
    console.log("Custom message: fetch fail");
  } else {
    console.log("Custom message: fetch success");
  }

  console.log("Fetch finished");

  return res.json();
}

export default FetchContentTypes;
