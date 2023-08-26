"use client";

// React
import {useContext} from "react";

// Project
import {pageStyle} from "./styles/globalStyles";
import ProductsDisplayWindow from "@/app/components/ProductsDisplayWindow.jsx";

// Project
import MainLayout from "./MainLayout.jsx";
import {PageCategoryContext} from "./layout.js";

// AntD
import {Carousel, Col, Divider, Image, Row, Typography} from "antd";

const {Title} = Typography;

export default function Homepage() {
    // Global state access
    const {pageCategory} = useContext(PageCategoryContext);

    console.log(`${pageCategory} rendered`);

    return (
        <MainLayout>
            <div style={pageStyle}>

                {/* Row with Carousel */}
                <Row>
                    <Col xs={0} sm={0} md={24}>
                        <Carousel autoplay>
                            <div>
                                <Image
                                    src="/images/home/carousel-1.jpg"
                                    alt="placeholder image"
                                    width={"auto"}
                                    height={"auto"}
                                    preview={false}
                                />
                            </div>
                            <div>
                                <Image
                                    alt="A placeholder image"
                                    src="https://picsum.photos/1800/600"
                                    preview={false}
                                />
                            </div>
                            <div>
                                <Image
                                    alt="A placeholder image"
                                    src="https://placehold.co/1800x600"
                                    preview={false}
                                />
                            </div>
                        </Carousel>
                    </Col>
                </Row>

                {/* Row for products */}
                <Row>
                    <Divider>All Products</Divider>
                    <Col span={24}>
                        <ProductsDisplayWindow category={pageCategory}/>
                    </Col>
                </Row>

                {/* Row for special products */}
                <Row>
                    <Divider/>
                    <Col>
                        <Typography>
                            <Title level={2}>Special Offers</Title>
                        </Typography>
                    </Col>
                </Row>
            </div>
        </MainLayout>
    );
}
