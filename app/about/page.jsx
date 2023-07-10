"use client";

import { Divider, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function About() {
  console.log("About page running...");

  return (
    <main>
      <Typography>
        <Title>About!</Title>
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
