"use client";

export async function fetchData(url) {
  try {
    const response = await fetch(url);

    // Error handling only for HTTP response status
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. HTTP response status: ${response.status}`
      );
    }

    return response.json();
    // General error handling
  } catch (error) {
    console.error("General problem with fetching data. Error: ", error);
  }
}
