"use client";

// React imports
import { useState } from "react";

// Chakra imports

export default function Home() {
  console.log("Homepage running...");

  const [count, setCount] = useState(1);

  const click = () => {
    setCount(count + 1);
    console.log(`Clicked ${count} times`);
  };

  return (
    <main>
      <h1>Hello</h1>
      <p>I am testing whether the UI has changed</p>
    </main>
  );
}
