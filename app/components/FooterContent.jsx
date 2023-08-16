"use client";

// AntD components
import { Col, Divider, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import Link from "antd/es/typography/Link";
import {
  TwitterOutlined,
  FacebookOutlined,
  WechatOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function FooterContent() {
  return (
    <div>
      <Divider />
      <Row>
        {/* --- COLUMN 1 --- */}
        <Col span={8}>
          <div>
            <Title level={4}>Contact us</Title>
            <p>Call us 24 / 7</p>
            <Link
              href="tel:+386 852 547 593"
              style={{ fontWeight: "bold", color: "green", fontSize: "18px" }}
            >
              +386 852 547 593
            </Link>
          </div>

          <div>
            <p>Sotla Lab Equipment d.o.o.</p>
            <p>Steklarska ulica 5B</p>
            <p>3825 Rogaska Slatina</p>
            <p>Slovenia</p>
          </div>
          <Space size={"middle"}>
            <Link href="https://www.twitter.com/">
              <TwitterOutlined style={{ fontSize: "18px" }} />
            </Link>
            <Link href="https://www.facebook.com/">
              <FacebookOutlined style={{ fontSize: "18px" }} />
            </Link>
            <Link href="https://www.wechat.com/">
              <WechatOutlined style={{ fontSize: "18px" }} />
            </Link>
            <Link href="https://www.youtube.com/">
              <YoutubeOutlined style={{ fontSize: "18px" }} />
            </Link>
          </Space>
        </Col>

        {/* --- COLUMN 2 --- */}
        <Col span={6}>
          <Title level={4}>Company</Title>
          <p>About</p>
          <p>Contact</p>
        </Col>

        {/* --- COLUMN 3 --- */}
        <Col span={6}>
          <Title level={4}>Quick Links</Title>
          <p>Shipping</p>
          <p>Return Policy</p>
        </Col>

        {/* --- COLUMN 4 --- */}
        <Col span={4}>
          <Title level={4}>Business</Title>
          <p>About</p>
          <p>Contact</p>
        </Col>
      </Row>
      <Divider />
      <p style={{ fontSize: "10px", textAlign: "right" }}>
        © 2023 SOTLA Lab Equipment d.o.o. All Rights Reserved
      </p>
    </div>
  );
}
