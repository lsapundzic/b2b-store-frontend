"use client";

<<<<<<< HEAD
// React
import Image from "next/image";

// AntD
import { Divider, Space } from "antd";
=======
import { Divider, Image, Space } from "antd";
>>>>>>> denisbranch/changes
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

const customHeaderStyle = {
  backgroundColor: "white",
  paddingLeft: 50,
  paddingRight: 50,
};

export default function CustomHeader() {
  return (
<<<<<<< HEAD
    <Space style={customHeaderStyle} align="center" size="small">
      <Link href="/">
        <Image
          src="/icons/png/logo-no-background.png"
          alt="Company Logo"
          width={110}
          height={70}
        />
      </Link>
      <Link href="/">
        <Title level={2} style={{ alignContent: "center" }}>
          Sotla Laboratory Equipment
        </Title>
=======
    <Space style={customHeaderStyle} align="center" size="large">
      <Link href="/">
        <Image
          alt="Sotla Company Logo"
          src="../icon.png"
          width={80}
          height={80}
          preview={false}
        />
      </Link>
      <Link href="/">
        <Title level={2}>Sotla Laboratory Equipment</Title>
>>>>>>> denisbranch/changes
      </Link>
    </Space>
  );
}
