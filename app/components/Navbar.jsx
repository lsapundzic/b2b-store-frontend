"use client";
import { GiftOutlined, AimOutlined, UserOutlined } from "@ant-design/icons";

import { Menu } from "antd";
import Link from "next/link";
import { useState } from "react";

const routes = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <AimOutlined />,
  },
  {
    label: <Link href="/">About</Link>,
    key: "about",
    icon: <UserOutlined />,
  },
  {
    label: <Link href="/">Products</Link>,
    key: "products",
    icon: <GiftOutlined />,
  },
];

export default function Navbar() {
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
