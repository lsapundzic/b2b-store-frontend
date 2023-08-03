// Method of fetching with Contentful Client
const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN,
});
