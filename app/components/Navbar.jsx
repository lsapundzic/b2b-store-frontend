"use client";

// AntD icons
import { AimOutlined, GiftOutlined, UserOutlined } from "@ant-design/icons";

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
    icon: <UserOutlined />,
  },
];

export default function Navbar() {
  // Use State
  const [current, setCurrent] = useState("mail");

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
