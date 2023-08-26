"use client";

// React
import Image from "next/image";

// AntD
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import {Col, Row} from "antd";
import useWindowDimension from "@/app/hooks/useWindowDimension";

const customHeaderStyle = {
    backgroundColor: "white", paddingLeft: 50, paddingRight: 50,
};

export default function CustomHeader() {
    let {width, height} = useWindowDimension();

    console.log("Width", width, "Height", height);


    return (<Row align="middle" style={customHeaderStyle}>
        <Col flex="110px">
            <Link href="/">
                <Image
                    src="/icons/png/logo-no-background.png"
                    alt="Company Logo"
                    width={110}
                    height={70}
                />
            </Link>
        </Col>
        <Col flex="auto">
            <Link href="/">
                <Title level={2} style={{alignContent: "center"}}>
                    Sotla Laboratory Equipment
                </Title>
            </Link>
        </Col>


    </Row>);
}
