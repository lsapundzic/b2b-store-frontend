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
        <Col span={6}>
          <Image
            alt="Company CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          >
            Our CEO
          </Image>
        </Col>
        <Col span={6}>
          <Image
            alt="Chief Financial Officer"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={6}>
          <Image
            alt="Chief Technical Officer"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={6}>
          <Image
            alt="Sales Manager"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
      </Row>
    </div>
  );
}
