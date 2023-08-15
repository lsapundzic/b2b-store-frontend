"use client";

// AntD components
import { Col, Divider, Row } from "antd";
import Title from "antd/es/typography/Title";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";

export default function FooterContent() {
  return (
    <div>
      <Divider />
      <Row>
        <Col span={8}>
          <Title level={4}>Contact us</Title>
          <p>Call us 24/7</p>
          <p>+386 64 247 593</p>
          <p>Sotla Lab Equipment d.o.o.</p>
          <p>Polje ob Sotli 4</p>
          <p>3255 Podcetrtek</p>
          <p>Slovenia</p>
        </Col>
        <Col span={6}>
          <Title level={4}>Company</Title>
          <p>About</p>
          <p>Contact</p>
        </Col>
        <Col span={6}>
          <Title level={4}>Quick Links</Title>
          <p>Shipping</p>
          <p>Return Policy</p>
        </Col>
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
