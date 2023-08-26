"use client";


import {useContext} from "react";
import MainLayout from "../MainLayout.jsx";
import {PageCategoryContext} from "../layout.js";
import ProductsDisplayWindow from "@/app/components/ProductsDisplayWindow";
import {Col, Row} from "antd";

function Products() {
    let {pageCategory} = useContext(PageCategoryContext);
    console.log(`${pageCategory} rendered`);

    return (
        <MainLayout>
            <Row>
                <Col span={24}>
                    <ProductsDisplayWindow category={pageCategory}/>
                </Col>
            </Row>
        </MainLayout>
    );
}

export default Products;
