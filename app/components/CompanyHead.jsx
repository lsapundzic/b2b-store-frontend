"use client";

import { Image, Space } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

const style = {
  backgroundColor: "white",
  paddingLeft: 50,
  paddingRight: 50,
};
export default function CompanyHead() {
  return (
    <Space style={style}>
      <Link href="/">
        <Image alt="Sotla company logo" src="../icon.png" />
      </Link>
      <Link href="/">
        <Title>Sotla Laboratory Equipment</Title>
      </Link>
    </Space>
  );
}
