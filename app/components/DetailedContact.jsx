"use client";

// AntD
import { Col, Divider, Row, Space, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function DetailedContact({ sectionTitle }) {
  return (
    <div>
      <Title style={{ textAlign: "center" }}>{sectionTitle}</Title>
      <Row>
        <Col sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Direct Contact</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Headquarters</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Work With Us</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>

        <Col sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Customer Service</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Media Relations</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Distributor Support</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
