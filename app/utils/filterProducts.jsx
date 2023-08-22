export default function filterProducts(data, criteria) {
  // Get unique categories from the data
  const uniqueCategories = [
    ...new Set(data.items.map((item) => item.fields.category)),
  ];

  if (criteria === "products" || "default") {
    return data.items;
  }

  const filteredItems = data.items.filter(
    (item) => item.fields.category === criteria
  );
  return filteredItems;
}
