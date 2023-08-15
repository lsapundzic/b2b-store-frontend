// TODO: Implement search safety measures immediately

export default function filterProducts(data, criteria) {
  if (criteria === "all") {
    return data.items;
  }

  return data.items.filter((filtered) => filtered.fields.category === criteria);
}
