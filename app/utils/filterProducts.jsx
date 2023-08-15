export default function filterProducts(products, criteria) {
  try {
    if (criteria === "all") {
      return products;
    }

    return products.items.filter(
      (product) => product.fields.category === criteria
    );
  } catch {
    console.error("ERROR FILTERING DATA, RETURNING DEFAULT VALUE");
    return products;
  }
}
