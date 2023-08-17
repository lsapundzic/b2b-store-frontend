"use client";

import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <h1>TESTING AREA</h1>
      <h2>LEAVE THIS BRANCH IMMEDIATELY</h2>
    </div>
  );
}
