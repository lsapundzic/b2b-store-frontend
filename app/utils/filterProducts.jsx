export default function filterProducts(data, criteria) {
  // Get unique categories from the data

  if (criteria === "products" || "default") {
    return data.items;
  }

  if (criteria === "home") {
  }

  const filteredItems = data.items.filter(
    (item) => item.fields.category === criteria
  );
  return filteredItems;
}
