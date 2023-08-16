// Currently disabled, I am not vibing with it

"use client";

import { Modal, Typography } from "antd";
const { Paragraph } = Typography;

export default function CustomModal() {
  return (
    <Modal
      title="Purchase Process Information"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>
        <Paragraph style={textStyle}>
          Thank you for visiting Sotla Lab Equipment We value your interest in
          our products. Please note that our B2B platform does not currently
          support direct online purchases. We exclusively collaborate with
          authorized distributors and institutions to provide our products. For
          purchasing inquiries, bulk orders, or more information about our
          products, please reach out to our dedicated sales team. Our experts
          are ready to assist you in finding the best solutions to meet your
          specific needs.
        </Paragraph>
        <Paragraph>Contact our Sales Team</Paragraph>
        <Paragraph style={textStyle}>
          Email: sales@sotla.si - Phone: +386 655 7254 At Sotla Lab Experts, we
          are committed to delivering exceptional products and services to our
          valued partners. Contact us today to explore how we can support your
          requirements and facilitate a seamless purchasing experience. Thank
          you for considering Sotla Lab Experts as your trusted supplier. We
          look forward to serving you with excellence.
        </Paragraph>
      </div>
    </Modal>
  );
}
