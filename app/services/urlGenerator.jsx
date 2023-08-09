import { BASE_URL, GET_ALL_ENTRIES } from "./requests";

const singleEntryUrl = (entryID) => {
  return `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.DELIVERY_ACCESS_TOKEN}`;
};

const allEntriesUrl = () => {
  return GET_ALL_ENTRIES;
};

export { singleEntryUrl, allEntriesUrl };
