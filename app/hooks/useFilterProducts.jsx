import { useEffect, useState } from "react";

export default function useFilterProducts(data, criteria) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!data) {
      setFilteredData([]);
      return; // Return early if data is not available
    }

    if (
      criteria === "products" ||
      criteria === "default" ||
      criteria === "home"
    ) {
      setFilteredData(data.items);
    } else {
      const filterByCategory = data.items.filter(
        (item) => item.fields.category === criteria
      );

      setFilteredData(filterByCategory);
    }
  }, [data, criteria]);

  return { filteredData };
}
