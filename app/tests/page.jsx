// This is only for testing API and GET requests with SSR- no interface

import { Image } from "antd";
import {
  GET_ALL_ENTRIES,
  GET_CONTENT_MODEL,
  GET_CONTENT_TYPE,
  GET_CONTENT_TYPE_ENTRIES,
  GET_SPACE,
} from "../services/requests";

// Fetching data on the server side
export async function dataFetch(fetchMe) {
  const res = await fetch(fetchMe);

  if (!res.ok) {
    throw new Error("Custom message: failed to fetch data");
  }

  return res.json();
}

export default async function TestPage() {
  console.log("--- --- TESTING PLATFORM RUNNING --- ---");

  // Constructing image fetchign API
  // const baseURL = `https://images.ctfassets.net`
  // const spaceID = process.env.SPACE_ID;
  // const assetID = ;
  // const uniqueID = `4acFDyMvoCr0if9nHEGZBC`;
  // const name = `Microscope.jpg`;

  // Get single asset
  const baseURL = "https://cdn.contentful.com";
  const spaceID = process.env.SPACE_ID;
  const environmentID = "master";
  const assetID = `4acFDyMvoCr0if9nHEGZBC`;
  const accessToken = process.env.DELIVERY_ACCESS_TOKEN;

  const retrievalURL = `${baseURL}/spaces/${spaceID}/environments/${environmentID}/assets/${assetID}/?access_token=${accessToken}`;

  const time = new Date();
  const now = `Action on: ${time.getHours()}H ${time.getMinutes()}M ${time.getSeconds()}S`;

  // DATA FETCH INSERT HERE
  const data = await dataFetch(retrievalURL);

  console.log(now, "--- Fetched data: --- ", data.fields.file.url);
  const imageURL = data.fields.file.url.toString();
  console.log("What is the URL? ", imageURL);

  console.log("------------------------------------");

  return (
    <main>
      <h1>PAGE FOR TESTING UI COMPONENTS & FUNCTIONALITY</h1>
      <h2>Nothing for you to see here, leave immediately</h2>
      <div>
        {/* <Image
          alt="Some image"
          src="https://images.ctfassets.net/wzh8zqkwvm1v/4acFDyMvoCr0if9nHEGZBC/fb49e80cf8095c9a7565ca2599b5a741/Microscope.jpg"
        /> */}
      </div>
    </main>
  );
}
