export default function filterProducts(data, criteria) {
  // Get unique categories from the data
  const uniqueCategories = [
    ...new Set(data.items.map((item) => item.fields.category)),
  ];

<<<<<<< HEAD
=======
  // console.log("Unique categories; ", uniqueCategories);

>>>>>>> denisbranch/changes
  if (criteria === "products") {
    return data.items;
  }

<<<<<<< HEAD
  const filteredItems = data.items.filter(
    (item) => item.fields.category === criteria
  );
  return filteredItems;
=======
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
>>>>>>> denisbranch/changes
}
