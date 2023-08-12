// "use client";

const baseURL = "https://cdn.contentful.com";

// Get a single content entry
export function constructEntryURL(entryID) {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
  return url;
}

// Get all entries from a content type
export function constructGetAllContentTypeEntries(productType) {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}&content_type=${productType}`;
  return url;
}

// Get a single asset (image, .pdf)
export function constructGetAsset(assetID) {
  const url = `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/assets/${assetID}/?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
  return url;
}
