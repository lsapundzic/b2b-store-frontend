"use client";

// Project
import {textStyle} from "../../app/styles/globalStyles";

// AntD
import {Card, Col, Image, Row, Space, Typography} from "antd";
import {LinkedinOutlined, MediumOutlined, TwitterOutlined} from "@ant-design/icons";

const {Title, Paragraph} = Typography;

export default function TeamMembers({componentTitle, componentBody}) {
    return (
        <div>

            {/* Paragraph about the team */}
            <Row>
                <Col span={24}>
                    <Typography>
                        <Title level={2}>{componentTitle}</Title>
                        <Paragraph style={textStyle}>{componentBody}</Paragraph>
                    </Typography>
                </Col>
            </Row>

            {/* Cards with team members */}
            <Row>
                <Col span={6}>
                    <Card
                        style={{width: "280px", height: "375px"}}
                        hoverable
                        cover={<Image
                            alt="Company CEO"
                            src="https://placehold.co/280x230"
                            preview={false}
                            width={280}
                            height={"100%"}
                        />}
                    >
                        <Paragraph style={{fontSize: "19px", fontWeight: "bold"}}>L. Sap</Paragraph>
                        <Paragraph>CEO</Paragraph>
                        <Space>
                            <a href={"https://linkedin.com"}><LinkedinOutlined/></a>
                            <a href={"https://twitter.com"}><TwitterOutlined/></a>
                            <a href={"https://medium.com"}><MediumOutlined/></a>
                        </Space>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{width: "280px", height: "375px"}}
                        hoverable
                        cover={<Image
                            alt="Company CTO"
                            src="https://placehold.co/280x230"
                            preview={false}
                            width={280}
                            height={"100%"}
                        />}
                    >
                        <Paragraph style={{fontSize: "19px", fontWeight: "bold"}}>D. Pin</Paragraph>
                        <Paragraph>CTO</Paragraph>
                        <Space>
                            <a href={"https://linkedin.com"}><LinkedinOutlined/></a>
                            <a href={"https://twitter.com"}><TwitterOutlined/></a>
                            <a href={"https://medium.com"}><MediumOutlined/></a>
                        </Space>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{width: "280px", height: "375px"}}
                        hoverable
                        cover={<Image
                            alt="Company CFO"
                            src="https://placehold.co/280x230"
                            preview={false}
                            width={280}
                            height={"100%"}
                        />}
                    >
                        <Paragraph style={{fontSize: "19px", fontWeight: "bold"}}>J. Mei</Paragraph>
                        <Paragraph>CFO</Paragraph>
                        <Space>
                            <a href={"https://linkedin.com"}><LinkedinOutlined/></a>
                            <a href={"https://twitter.com"}><TwitterOutlined/></a>
                            <a href={"https://medium.com"}><MediumOutlined/></a>
                        </Space>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{width: "280px", height: "375px"}}
                        hoverable
                        cover={<Image
                            alt="Company Environmental Specialist"
                            src="https://placehold.co/280x230"
                            preview={false}
                            width={280}
                            height={"100%"}
                        />}
                    >
                        <Paragraph style={{fontSize: "19px", fontWeight: "bold"}}>P. Bir</Paragraph>
                        <Paragraph>Environmental Specialist</Paragraph>
                        <Space>
                            <a href={"https://linkedin.com"}><LinkedinOutlined/></a>
                            <a href={"https://twitter.com"}><TwitterOutlined/></a>
                            <a href={"https://medium.com"}><MediumOutlined/></a>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
