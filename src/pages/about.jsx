import Header from "/src/components/header/Header";
import axios from "axios";
import { useState } from "react";

export default function About() {
  [data, getData] = useState();

  return (
    <>
      <Header />
      <main>
        <h2>Title</h2>
        <p>Paragraph1</p>
        <p>Image1</p>
        <p>Paragraph2</p>
        <p>Image2</p>
      </main>
    </>
  );
}
