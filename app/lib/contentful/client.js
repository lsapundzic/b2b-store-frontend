// THis method of fetching data is according to the Contentful docu

const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.SPACE_ID,
  environment: "master",
  accessToken: process.env.DELIVERY_ACCESS_TOKEN,
});
