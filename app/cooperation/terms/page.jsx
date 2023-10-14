"use client";

import {useContext} from "react";
import {useFetchData} from "../../hooks/useFetchData.jsx";
import {pageStyle} from "../../styles/globalStyles.js";
import {SingleEntryURL, TERMS_ID} from "../../utils/buildURL";
import MainLayout from "../../MainLayout.jsx";
import {PageCategoryContext} from "../../layout.js";
import CustomSkeleton from "../../components/CustomSkeleton.jsx";
import {Col, Row} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export default function Shipping() {
    let {pageCategory} = useContext(PageCategoryContext);
    console.log(`${pageCategory} rendered`);

    const {data, isLoading} = useFetchData(SingleEntryURL(TERMS_ID));

    return (<MainLayout>
        <div style={pageStyle}>
            {isLoading || !data ? (<CustomSkeleton/>) : (
                <>
                    <Row>
                        <Col>
                            <Title>
                                {data.fields.title}
                            </Title>
                            <Paragraph>
                                {data.fields.body}
                            </Paragraph>
                        </Col>
                    </Row>
                </>)}
        </div>
    </MainLayout>);
}
