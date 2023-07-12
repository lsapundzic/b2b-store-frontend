"use client";

// AntD imports
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

async function getData() {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  console.log("Homepage running...");

  const data = await getData();

  console.log(data);

  return (
    <main>
      <Typography>
        <Title>Homepage!</Title>
        <Title level={2}>Some Content</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
          doloribus id soluta? Accusantium alias cumque ipsum nisi, rem sapiente
          vel. A amet consequatur cupiditate, deleniti dignissimos distinctio et
          fugiat fugit, hic ipsum iure labore laudantium magnam maxime nesciunt
          nihil non quibusdam quidem tenetur, velit veniam veritatis vero
          voluptas voluptates.
        </Paragraph>
      </Typography>
    </main>
  );
}
