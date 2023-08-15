"use client";

// AntD icons
import { HomeOutlined, CoffeeOutlined, ShopOutlined } from "@ant-design/icons";

//AntD components
import { Menu } from "antd";

// React components
import { useState } from "react";
import Link from "next/link";

// Object from which the navbar is generated
const menuItems = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/about">About</Link>,
    key: "about",
    icon: <CoffeeOutlined />,
  },
  {
    label: <Link href="/products">Products</Link>,
    key: "products",
    icon: <ShopOutlined />,
    children: [
      {
        type: "group",
        label: "Equipment",
        children: [
          {
            label: <Link href="/">Microscopes</Link>,
            key: "microscopes",
          },
          {
            label: "Centrifuges",
            key: "centrifuges",
          },
          {
            label: "Drying Ovens",
            key: "ovens",
          },
        ],
      },
      {
        type: "group",
        label: "Consumables",
        children: [
          {
            label: <Link href="/">Pipettes</Link>,
            key: "pipettes",
          },
          {
            label: "Syringes",
            key: "syringes",
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [current, setCurrent] = useState("default");

  //   Function that changes useState so that the active tab can remain underlined
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav>
      <Menu
        // theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuItems}
      />
    </nav>
  );
}
