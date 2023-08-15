"use client";

import { Card, Typography } from "antd";
const { Paragraph } = Typography;

import { TrophyTwoTone } from "@ant-design/icons";

export default function TCCard() {
  return (
    <Card>
      <Paragraph>
        <TrophyTwoTone />
        Worldwide Shipping
      </Paragraph>
      <Paragraph>
        <TrophyTwoTone />1 Year Warranty
      </Paragraph>
    </Card>
  );
}
