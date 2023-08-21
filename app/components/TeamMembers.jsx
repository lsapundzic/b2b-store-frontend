"use client";

// Project
import { textStyle } from "../styles/globalStyles.js";

// AntD
import { Col, Row, Image, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function TeamMembers({ componentTitle, componentBody }) {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Typography>
            <Title level={2}>{componentTitle}</Title>
            <Paragraph style={textStyle}>{componentBody}</Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col span={6} style={{ textAlign: "center" }}>
          <Image
            alt="Company CEO"
            src="https://placehold.co/200x300"
            preview={false}
          >
            Our CEO
          </Image>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <Image
            alt="Chief Financial Officer"
            src="https://placehold.co/200x300"
            preview={false}
          ></Image>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <Image
            alt="Chief Technical Officer"
            src="https://placehold.co/200x300"
            preview={false}
          ></Image>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <Image
            alt="Sales Manager"
            src="https://placehold.co/200x300"
            preview={false}
          ></Image>
        </Col>
      </Row>
    </div>
  );
}
