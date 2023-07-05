"use client";

import { Text } from "@chakra-ui/react";

// Chakra imports

export default function Home() {
  console.log("Homepage running...");

  return (
    <main>
      <Text fontSize="6xl">Welcome to The Sotla Website</Text>
      <Text fontSize="xl">This is a ChakraUI based template</Text>
      <Text fontSize="md">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </Text>
      <Text fontSize="md">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </Text>
    </main>
  );
}
