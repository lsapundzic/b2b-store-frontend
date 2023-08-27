"use client";

// Project
import {textStyle} from "../../styles/globalStyles.js";

// AntD
import {Card, Col, Image, Row, Space, Typography} from "antd";
import {LinkedinOutlined, MediumOutlined, TwitterOutlined} from "@ant-design/icons";

const {Title, Paragraph} = Typography;

export default function TeamMembers({componentTitle, componentBody}) {
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
                <Col span={6} style={{textAlign: "center"}}>
                    <Image
                        alt="Chief Financial Officer"
                        src="https://placehold.co/200x300"
                        preview={false}
                    />
                </Col>
                <Col span={6} style={{textAlign: "center"}}>
                    <Image
                        alt="Chief Technical Officer"
                        src="https://placehold.co/200x300"
                        preview={false}
                    />
                </Col>
                <Col span={6} style={{textAlign: "center"}}>
                    <Image
                        alt="Sales Manager"
                        src="https://placehold.co/200x300"
                        preview={false}
                    />
                </Col>
            </Row>
        </div>
    );
}
