"use client";

import { Divider } from "antd";

const newsletterStyle = {
  padding: "50px",
  backgroundColor: "white",
};

export default function Newsletter() {
  return (
    <div style={newsletterStyle}>
      <Divider></Divider>
      <div>Newsletter</div>
    </div>
  );
}
