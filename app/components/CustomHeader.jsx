"use client";

// React
import Image from "next/image";

// AntD
import { Divider, Space } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

const customHeaderStyle = {
  backgroundColor: "white",
  paddingLeft: 50,
  paddingRight: 50,
};

export default function CustomHeader() {
  return (
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
      </Link>
    </Space>
  );
}
