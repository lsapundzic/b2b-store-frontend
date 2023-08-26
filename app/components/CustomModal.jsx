"use client";

// React
import { useState } from "react";
import Link from "next/link";

// Project
import { textStyle } from "../styles/globalStyles";

// AntD
import { Button, Modal, Space, Typography } from "antd";
const { Paragraph, Title } = Typography;

export default function CustomModal() {
  // Modal functionality
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          width: `100%`,
          height: 45,
          backgroundColor: "green",
        }}
      >
        Request a Quote
      </Button>

      <Modal
        title="Request a Quote"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
      >
        <Space direction="vertical">
          <Paragraph style={textStyle}>
            Thank you for visiting Sotla Lab Equipment We value your interest in
            our products. Please note that our B2B platform does not currently
            support direct online purchases. We exclusively collaborate with
            authorized distributors and institutions to provide our products.
            For purchasing inquiries, bulk orders, or more information about our
            products, please reach out to our dedicated sales team. Our experts
            are ready to assist you in finding the best solutions to meet your
            specific needs.
          </Paragraph>
          <Title level={5}>Contact our Sales Team</Title>
          <Paragraph style={textStyle}>
            Email: <a href="mailto:sales@sotla.si">sales@sotla.si</a> | Phone:
            +386 655 7254 At Sotla Lab Experts, we are committed to delivering
            exceptional products and services to our valued partners. Contact us
            today to explore how we can support your requirements and facilitate
            a seamless purchasing experience. Thank you for considering Sotla
            Lab Experts as your trusted supplier. We look forward to serving you
            with excellence.
          </Paragraph>
        </Space>
        <Button type="dashed" onClick={handleOk}>
          OK
        </Button>
      </Modal>
    </div>
  );
}
