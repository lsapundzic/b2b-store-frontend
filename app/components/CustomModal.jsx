"use client";

// React
import { useState } from "react";

// Project
import { textStyle } from "../styles/globalStyles";

// AntD
import { Button, Divider, Modal, Space, Typography, theme } from "antd";
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
            Thank you for visiting Sotla Lab Equipment. We value your interest
            in our products. Please note that our B2B platform does not
            currently support direct online purchases. We exclusively
            collaborate with authorized distributors and institutions to provide
            our products. For purchasing inquiries, bulk orders, or more
            information about our products, please reach out to our dedicated
            sales team. Our experts are ready to assist you in finding the best
            solutions to meet your specific needs.
          </Paragraph>

          <Paragraph style={textStyle}>
            <Space direction="horizontal">
              <span style={{ color: "#52c41a" }}>Email:</span>
              <a href="mailto:sales@sotla.si">sales@sotla.si</a>
              <Divider type="vertical" />
              <span style={{ color: "#52c41a" }}>Phone:</span> +386 655 7254
            </Space>
          </Paragraph>
          <Paragraph style={textStyle}>
            Contact us today to explore how we can support your requirements and
            facilitate a seamless purchasing experience.
          </Paragraph>

          <Button type="dashed" onClick={handleOk}>
            Close
          </Button>
        </Space>
      </Modal>
    </div>
  );
}
