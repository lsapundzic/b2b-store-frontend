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
    label: <a href="/">Home</a>,
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: <a href="/products">Products</a>,
    key: "products",
    icon: <AppstoreOutlined />,
  },
  //   {
  //     label: "Navigation Three - Submenu",
  //     key: "SubMenu",
  //     icon: <SettingOutlined />,
  //     children: [
  //       {
  //         type: "group",
  //         label: "Item 1",
  //         children: [
  //           {
  //             label: "Option 1",
  //             key: "setting:1",
  //           },
  //           {
  //             label: "Option 2",
  //             key: "setting:2",
  //           },
  //         ],
  //       },
  //       {
  //         type: "group",
  //         label: "Item 2",
  //         children: [
  //           {
  //             label: "Option 3",
  //             key: "setting:3",
  //           },
  //           {
  //             label: "Option 4",
  //             key: "setting:4",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

export default function Navigation() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
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
