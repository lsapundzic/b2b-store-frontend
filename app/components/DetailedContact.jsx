"use client";

// AntD
import { Col, Divider, Row, Space, Typography } from "antd";
import Link from "next/link";
const { Title, Paragraph } = Typography;

export default function DetailedContact({ sectionTitle }) {
  return (
    <div>
      <Title level={2} style={{ textAlign: "center" }}>
        {sectionTitle}
      </Title>
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={4}>Direct Contact</Title>
            <a href="mailto:office@sotla.si" style={{ color: "inherit" }}>
              office@sotla.si
            </a>
            <a href="tel:+386 852 547 593" style={{ color: "inherit" }}>
              +386 852 547 593
            </a>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={4}>Headquarters</Title>
            <div>Sotla Lab Equipment d.o.o.</div>
            <div>Steklarska ulica 5B</div>
            <div>3825 Rogaška Slatina</div>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={4}>Work With Us</Title>
            <div>Send your CV to:</div>
            <a href="mailto:hello@sotla.si" style={{ color: "inherit" }}>
              hello@sotla.si
            </a>
          </Space>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={4}>Customer Care</Title>
            <a href="mailto:support@sotla.si" style={{ color: "inherit" }}>
              support@sotla.si
            </a>
            <a href="tel:+386 852 547 593" style={{ color: "inherit" }}>
              +386 852 547 593
            </a>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={4}>Media Relations</Title>
            <a href="mailto:media@sotla.si" style={{ color: "inherit" }}>
              media@sotla.si
            </a>
            <a href="tel:+386 852 547 593" style={{ color: "inherit" }}>
              +386 852 547 593
            </a>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={4}>Distributor Support</Title>
            <a href="mailto:distributors@sotla.si" style={{ color: "inherit" }}>
              distributors@sotla.si
            </a>
            <a href="tel:+386 852 547 593" style={{ color: "inherit" }}>
              +386 852 547 593
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
