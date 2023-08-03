"use client";

// AntD icons
import {
  AimOutlined,
  CoffeeOutlined,
  ExperimentOutlined,
  CommentOutlined,
} from "@ant-design/icons";

//AntD components
import { Menu } from "antd";

// React components
import Link from "next/link";
import { useState } from "react";

const routes = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <AimOutlined />,
  },
  {
    label: <Link href="/about">About</Link>,
    key: "about",
    icon: <CoffeeOutlined />,
  },
  {
    label: <Link href="/products">Products</Link>,
    key: "products",
    icon: <ExperimentOutlined />,
  },
  {
    label: <Link href="/contact">Contact Us</Link>,
    key: "contact",
    icon: <CommentOutlined />,
  },
];

export default function Navbar() {
  // Use State
  const [current, setCurrent] = useState("default");

  //   It changes useState which highlights the pressed tab
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
        items={routes}
      />
    </nav>
  );
}
