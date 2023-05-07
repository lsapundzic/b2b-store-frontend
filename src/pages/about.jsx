import Header from "@/components/header/Header";
import axios from "axios";
import { useState } from "react";

export default function About() {
  const [data, setData] = useState([]);

  useState(() => {
    axios.get("http://localhost:1337/api/about").then((response) => {
      console.log("Response data: ", response.data);
      setData(response);
    });
  });

  console.log("Data below: ", data.data.data.attributes.title);

  return (
    <>
      <Header />
      <main></main>
    </>
  );
}
