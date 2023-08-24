import { useEffect } from "react";

export default function useFilterProducts(data, criteria) {
  // Get unique categories from the data

  useEffect(() => {
    if (criteria === "products" || "default" || "home") {
      return data.items;
    }

    const filteredItems = data.items.filter(
      (item) => item.fields.category === criteria
    );

    return filteredItems;
  }, [data.items, criteria]);
}
