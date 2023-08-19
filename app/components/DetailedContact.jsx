"use client";

// AntD
import { Col, Divider, Row, Space, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function DetailedContact({ sectionTitle }) {
  return (
    <div>
      <Title style={{ textAlign: "center" }}>{sectionTitle}</Title>
      <Row>
        <Col span={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Direct Contact</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Headquarters</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Work With Us</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Customer Service</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Title level={3}>Media Relations</Title>
            <div>office@sotla.si</div>
            <div>+386 852 547 593</div>
          </Space>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
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
