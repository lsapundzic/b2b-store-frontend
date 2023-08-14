"use client";

// AntD icons
import {
  HomeOutlined,
  CoffeeOutlined,
  ExperimentOutlined,
  MailOutlined,
  BugTwoTone,
  GiftOutlined,
} from "@ant-design/icons";

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
    icon: <ExperimentOutlined />,
  },
  // {
  //   label: <Link href="/contact">Contact Us</Link>,
  //   key: "contact",
  //   icon: <MailOutlined />,
  // },
  // {
  //   label: <Link href="/tracking">Tracking</Link>,
  //   key: "track",
  //   icon: <GiftOutlined />,
  // },
  // {
  //   label: <Link href="/tests">Tests</Link>,
  //   key: "tests",
  //   icon: <BugTwoTone />,
  // },
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
