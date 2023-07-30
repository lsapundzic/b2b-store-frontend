// Method of fetching with Contentful Client
const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.SPACE_ID,
  environment: "master",
  accessToken: process.env.DELIVERY_ACCESS_TOKEN,
});
