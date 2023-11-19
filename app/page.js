"use client";

// React
import {useContext} from "react";

// Project
import {pageStyle} from "./styles/globalStyles";
import DisplayWindow from "@/components/DisplayWindow.jsx";

// Project
import MainLayout from "./MainLayout.jsx";
import {PageCategoryContext} from "./layout.js";

// AntD
import {Carousel, Col, Divider, Image, Row, Typography} from "antd";
import {useFetchData} from "@/app/hooks/useFetchData";
import {ContentTypeEntriesURL} from "@/app/utils/buildURL";
import CustomSkeleton from "@/components/CustomSkeleton";

const {Title} = Typography;

export default function Homepage() {
    // Global page category
    let {pageCategory} = useContext(PageCategoryContext);
    console.log(`${pageCategory} rendered`);

    // Custom hook for getting data
    const {data, isLoading} = useFetchData(
        ContentTypeEntriesURL("product")
    );

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
                                    alt="A laboratory technician performing an experiment"
                                    width={"auto"}
                                    height={"auto"}
                                    preview={false}
                                />
                            </div>
                            <div>
                                <Image
                                    src="https://placehold.co/1800x500"
                                    alt="A placeholder image"
                                    preview={false}
                                />
                            </div>
                            <div>
                                <Image
                                    src="https://placehold.co/1800x500"
                                    alt="A placeholder image"
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
                        {isLoading || !data ? (
                            <CustomSkeleton/>
                        ) : (
                            <DisplayWindow data={data} category={pageCategory}/>
                        )}
                    </Col>
                </Row>

                {/* Row for special products */}
                <Row>
                    <Divider>Special Deals</Divider>
                    <Col>
                        {isLoading || !data ? (
                            <CustomSkeleton/>
                        ) : (
                            <DisplayWindow data={data} category={"microscopes"}/>
                        )}
                    </Col>
                </Row>
            </div>
        </MainLayout>
    );
}
