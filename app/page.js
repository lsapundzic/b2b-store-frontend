"use client";

// React imports
import { useState } from "react";

// Chakra imports
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Home() {
  console.log("Homepage running...");

  const [count, setCount] = useState(1);

  const click = () => {
    setCount(count + 1);
    console.log(`Clicked ${count} times`);
  };

  return (
    <main>
      <Button colorScheme="green" onClick={click}>
        Click me!
      </Button>
    </main>
  );
}
