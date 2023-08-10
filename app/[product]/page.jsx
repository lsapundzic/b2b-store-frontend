"use client";

export default function Product({ params }) {
  const { product } = params;
  return (
    <div>
      <h1>Welcome to the Product page!</h1>
      <h2>Product ID: {product}</h2>
    </div>
  );
}
