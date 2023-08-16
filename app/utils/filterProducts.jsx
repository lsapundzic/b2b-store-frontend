// TODO: Implement search safety measures immediately

export default function filterProducts(data, criteria) {
  // Get unique categories from the data
  const uniqueCategories = [
    ...new Set(data.items.map((item) => item.fields.category)),
  ];

  // console.log("Unique categories; ", uniqueCategories);

  if (criteria === "all") {
    return data.items;
  }

  // Check if criteria is a valid category
  if (uniqueCategories.includes(criteria)) {
    // Filter items based on the specified category
    const filteredItems = data.items.filter(
      (item) => item.fields.category === criteria
    );
    return filteredItems;
  } else {
    // Invalid criteria, throw an error
    console.error(`Invalid filter criteria: ${criteria}`);
    return data.items;
  }

  return data.items.filter((filtered) => filtered.fields.category === criteria);
}
