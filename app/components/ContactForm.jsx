import React, { useState } from "react";

import { Button, Form, Input, Select, Space } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function ContactForm() {
  const formRef = React.useRef(null);
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        formRef.current?.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        formRef.current?.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        formRef.current?.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
        break;
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  return (
    <Space direction="vertical" align="center">
      <Form name="contactForm" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: "Enter your company" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Enter your message" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Form
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}
