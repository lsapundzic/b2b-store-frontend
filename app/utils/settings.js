// TODO: These URLs are not impleneted into the project
export const BASE_URL = `https://cdn.contentful.com`;

// Content types
const GET_SPACE = `${BASE_URL}/spaces/${process.env.SPACE_ID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const GET_CONTENT_MODEL = `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/content_types?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const GET_CONTENT_TYPE = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/content_types/staticPages?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

// Entries

// Get all entries of a space
const GET_ALL_ENTRIES = `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
const GET_SINGLE_ENTRY = `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;

// Test API
const testAPI = `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;
