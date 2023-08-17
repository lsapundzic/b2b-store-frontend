"use client";

import { useState } from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import Link from "next/link";

const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: <Link href="/products">Products</Link>,
    key: "products",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href="/dropdown">Dropdown</Link>,
    key: "dropdown",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: <Link href="/option">Option</Link>,
            key: "option",
          },
        ],
      },
      {
        label: <Link href="/">Hi</Link>,
        key: "hello",
      },
    ],
  },
  //   {
  //     label: (
  //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //         Navigation Four - Link
  //       </a>
  //     ),
  //     key: "alipay",
  //   },
];

export default function Navigation() {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
