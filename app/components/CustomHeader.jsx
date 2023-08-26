"use client";

import useWindowDimension from "@/app/hooks/useWindowDimension";
import {Col, Row} from "antd"
import Link from "next/link"
import Image from "next/image"
import Title from "antd/es/typography/Title";

const customHeaderStyle = {
    backgroundColor: "white", paddingLeft: 50, paddingRight: 50,
};

export default function CustomHeader() {
    let {width, height} = useWindowDimension();


    return (
        <div>
            {/* Conditionally render a component based on window width */}
            {width < 660 ? (
                <Row align="middle" style={customHeaderStyle}>
                    <Col flex="auto">
                        <Link href="/">
                            <Title level={2} style={{alignContent: "center"}}>
                                Sotla Laboratory Equipment
                            </Title>
                        </Link>
                    </Col>
                </Row>
            ) : (
                <Row align="bottom" style={customHeaderStyle}>
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
                </Row>
            )}
        </div>
    )


}


