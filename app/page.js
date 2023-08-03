"use client";

// AntD imports
import { Typography } from "antd";
const { Title } = Typography;

export default function Homepage() {
  console.log("Homepage running...");

  return (
    <main>
      <Typography>
        <Title>Homepage!</Title>
      </Typography>
    </main>
  );
}
