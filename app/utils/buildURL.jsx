// Globally accessible functions for generating URLs for Contentful API

const baseURL = "https://cdn.contentful.com";

// Static Page IDs
export const ABOUT_ID = `5wXQGH7Of5nYxWqPzLh8SM`;

// For a single entry based on its Contentful ID
export function SingleEntryURL(entryID) {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
  return url;
}

// For all entries in the Contentful space
export function AllEntriesURL() {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
  return url;
}

// For all entries of a specific content type
export function ContentTypeEntriesURL(productType) {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}&content_type=${productType}`;
  return url;
}

// For assets like images and pdfs
export function AssetURL(assetID) {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/assets/${assetID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
  return url;
}
