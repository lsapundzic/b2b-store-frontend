"use client";

export async function fetchData(url) {
  try {
    const response = await fetch(url);

    // Only for handling HTTP status errors
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. HTTP response status: ${response.status}`
      );
    }

    return response.json();

    // For general error handling
  } catch (error) {
    console.error("General problem with fetching data. Error: ", error);
  }
}
