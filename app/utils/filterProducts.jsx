export default function filterProducts(data, criteria) {
  // Get unique categories from the data

  if (criteria === "products" || "default" || "home") {
    return data.items;
  }

  const filteredItems = data.items.filter(
    (item) => item.fields.category === criteria
  );

  return filteredItems;
}
