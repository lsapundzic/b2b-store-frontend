"use client";

import { Menu } from "antd";
import { useState } from "react";

export default function Navbar({ routes }) {
  console.log("Navbar running");

  // Use State
  const [current, setCurrent] = useState("mail");

  //   It highlights the tab that is currently used
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={routes}
      ></Menu>
    </div>
  );
}
