"use client";

import { Col, Row, Image, Typography } from "antd";

export default function Certificates() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Image
            alt="ISO Certificate placeholder"
            src="/images/about/awards/iso.jpg"
            width={"auto"}
            height={200}
            preview={false}
          ></Image>
        </Col>
        <Col span={8}>
          <Image
            alt="Certificate placeholder"
            src="/images/about/awards/certificate.jpg"
            preview={false}
            width={"auto"}
            height={200}
          ></Image>
        </Col>
        <Col span={8}>
          <Image
            alt="CEO"
            src="/images/about/awards/ce_certificate.jpg"
            preview={false}
            width={"auto"}
            height={200}
          ></Image>
        </Col>
      </Row>
    </div>
  );
}
