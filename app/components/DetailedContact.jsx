"use client";

// AntD
import { Col, Divider, Space, Row, Typography } from "antd";
import DetailedContact from "../components/DetailedContact.jsx";

export default function DetailedContact() {
  return (
    <div>
      <Title style={{ textAlign: "center" }}>{data.fields.title}</Title>
      <Space direction="vertical">
        <Title level={3}>Direct Contact</Title>
        <div>office@sotla.si</div>
        <div>+386 852 547 593</div>
      </Space>
      <Space direction="vertical">
        <Title level={3}>Headquarters</Title>
        <div>office@sotla.si</div>
        <div>+386 852 547 593</div>
      </Space>
    </div>
  );
}
