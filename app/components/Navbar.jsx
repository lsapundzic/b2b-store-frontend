"use client";

// React
import { useContext } from "react";
import { PageCategoryContext } from "../layout.js";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "@/app/hooks/useWindowWidth";

// AntD icons
import {
  AimOutlined,
  AuditOutlined,
  CoffeeOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  FireOutlined,
  InteractionOutlined,
  LaptopOutlined,
  ReconciliationOutlined,
  RocketOutlined,
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

//AntD components
import { Col, Menu, Row } from "antd";
import Search from "antd/es/input/Search";

// Object from which the navbar is generated
const menuItems = [
  {
    label: "Products",
    key: "products",
    icon: <ShoppingCartOutlined />,
    children: [
      {
        label: <Link href="/products">All Equipment</Link>,
        key: "equipment",
        icon: <ReconciliationOutlined />,
      },
      {
        type: "group", // label: "Equipment",
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
    ],
  },
  {
    label: "Working Together",
    key: "cooperation",
    icon: <InteractionOutlined />,
    children: [
      {
        label: <Link href="/cooperation/distributors">Distributors</Link>,
        key: "distributors",
        icon: <ShareAltOutlined />,
      },
      {
        label: <Link href="/cooperation/shipping">Shipping</Link>,
        key: "shipping",
        icon: <RocketOutlined />,
      },
      {
        label: <Link href="/cooperation/terms">Terms & Conditions</Link>,
        key: "terms-conditions",
        icon: <AuditOutlined />,
      },
    ],
  },
  {
    label: "Company",
    key: "company",
    icon: <ShopOutlined />,
    children: [
      {
        label: <Link href="/company/about">About Us</Link>,
        key: "about",
        icon: <CoffeeOutlined />,
      },
      {
        label: <Link href="/company/careers">Careers</Link>,
        key: "careers",
        icon: <LaptopOutlined />,
      },
    ],
  },

  {
    label: <Link href="/contact">Contact Us</Link>,
    key: "contact",
    icon: <CustomerServiceOutlined />,
  },
];

export default function Navbar() {
  /*
            Serves dual function:
            1. For keeping track of the navbar highlight based on the page the user is on
            2. Global context that is used as a product filter based on navigation location

   */
  let { pageCategory, setPageCategory } = useContext(PageCategoryContext);

  // Window width listener
  let { width } = useWindowWidth();

  const onNavClick = (e) => {
    setPageCategory(e.key);
  };

  const onLogoClick = () => {
    setPageCategory("home");
  };

  return (
    <nav>
      <Row align="top">
        {/* LOGO SPACE */}
        <Col flex="110px">
          <Link href="/" onClick={onLogoClick}>
            <Image
              src="/icons/png/logo-no-background.png"
              alt="Company Logo"
              width={89}
              height={"57"}
            />
          </Link>
        </Col>

        {/* NAVBAR SPACE */}
        <Col flex="auto">
          <Menu
            onClick={onNavClick}
            selectedKeys={[pageCategory]}
            mode="horizontal"
            items={menuItems}
          />
        </Col>
      </Row>
    </nav>
  );
}
