"use client";

import { Divider, Image, Space } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

const customHeaderStyle = {
  backgroundColor: "white",
  paddingLeft: 50,
  paddingRight: 50,
};

export default function CustomHeader() {
  return (
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
      </Link>
    </Space>
  );
}
