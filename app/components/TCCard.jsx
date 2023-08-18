"use client";

import { Card, Space, Typography } from "antd";
const { Paragraph } = Typography;

import {
  GlobalOutlined,
  ApiOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

export default function TCCard() {
  return (
    <Card>
      <div>
        <Space size="middle">
          <GlobalOutlined />
          <p>Worldwide Shipping</p>
        </Space>
      </div>
      <div>
        <Space size="middle">
          <CarryOutOutlined />
          <p>Two Year Warranty</p>
        </Space>
      </div>
      <div>
        <Space size="middle">
          <ApiOutlined />
          <p>Commissioning & Servicing Included </p>
        </Space>
      </div>
    </Card>
  );
}
