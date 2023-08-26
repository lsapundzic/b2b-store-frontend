"use client";

import useWindowWidth from "@/app/hooks/useWindowWidth";
import {Col, Row} from "antd"
import Link from "next/link"
import Image from "next/image"
import Title from "antd/es/typography/Title";
import {PageCategoryContext} from "@/app/layout";
import {useContext} from "react";


const customHeaderStyle = {
    backgroundColor: "white", paddingLeft: 50, paddingRight: 50,
};

export default function CustomHeader() {
    // Window width listener
    let {width} = useWindowWidth();

    // Accessing global category context
    let {pageCategory, setPageCategory} = useContext(PageCategoryContext);

    // Changing category / key
    const changeCategory = () => {
        setPageCategory("home")
    }

    console.log("-- CUSTOM HEADER -- ", pageCategory)

    // TODO: Check if invoking pageCategory like this is actually dangerous

    return (
        <div>
            {/* Conditionally render a component based on window width */}
            {width < 660 ? (
                <Row align="middle" style={customHeaderStyle}>
                    <Col flex="auto">
                        <Link href="/" onClick={changeCategory}>
                            <Title level={2} style={{alignContent: "center"}}>
                                Sotla Laboratory Equipment
                            </Title>
                        </Link>
                    </Col>
                </Row>
            ) : (
                <Row align="bottom" style={customHeaderStyle}>
                    <Col flex="110px">
                        <Link href="/" onClick={changeCategory}>
                            <Image
                                src="/icons/png/logo-no-background.png"
                                alt="Company Logo"
                                width={110}
                                height={70}
                            />
                        </Link>
                    </Col>
                    <Col flex="auto">
                        <Link href="/" onClick={changeCategory}>
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


