"use client";

// React components
import { useContext, useState } from "react";
import Link from "next/link";

// AntD icons
import {
  AimOutlined,
  ApartmentOutlined,
  BookOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  CoffeeOutlined,
  DashboardOutlined,
  ShopOutlined,
  ExperimentOutlined,
  FireOutlined,
} from "@ant-design/icons";

//AntD components
import { Menu } from "antd";
import { PageCategoryContext } from "../layout";

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
    label: "Store",
    key: "store",
    icon: <ShopOutlined />,
    children: [
      {
        label: <Link href="/products">All Products</Link>,
        key: "products",
        icon: <BookOutlined />,
      },
      {
        type: "group",
        label: "Equipment",
        children: [
          {
            label: <Link href="/products">Microscopes</Link>,
            key: "microscopes",
            icon: <AimOutlined />,
          },
          {
            label: <Link href="/products">Centrifuges</Link>,
            key: "centrifuges",
            icon: <DashboardOutlined />,
          },
          {
            label: <Link href="/products">Drying Ovens</Link>,
            key: "ovens",
            icon: <FireOutlined />,
          },
        ],
      },
      {
        type: "group",
        label: "Glassware",
        children: [
          {
            label: <Link href="/products">Flasks</Link>,
            key: "flasks",
            icon: <ExperimentOutlined />,
          },
        ],
      },
    ],
  },
  {
    label: <Link href="/distributors">Find a Distributor</Link>,
    key: "distributors",
    icon: <ApartmentOutlined />,
  },
  {
    label: <Link href="/contact">Contact Us</Link>,
    key: "contact",
    icon: <CustomerServiceOutlined />,
  },
];

export default function Navbar() {
  // Global context that is used as a product filter based on navigation location
  let { pageCategory, setPageCategory } = useContext(PageCategoryContext);

  //  For keeping track of the navbar highlight based on the page the user is on
  const [current, setCurrent] = useState("default");

  //   Function that changes useState so that the active tab can remain underlined
  const onClick = (e) => {
    setCurrent(e.key);
    setPageCategory(e.key);
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
