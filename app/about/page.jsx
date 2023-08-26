"use client";

import {useContext} from "react";
import {useDataFetch} from "../hooks/useDataFetch.jsx";
import {pageStyle} from "../styles/globalStyles.js";
import {ABOUT_ID, SingleEntryURL} from "../utils/buildURL";
import MainLayout from "../MainLayout.jsx";
import {PageCategoryContext} from "../layout.js";
import CustomSkeleton from "../components/CustomSkeleton.jsx";
import CustomBanner from "../components/CustomBanner.jsx";
import TeamMembers from "../components/fragments/TeamMembers.jsx";
import {Col, Divider, Image, Row} from "antd";
import Certificates from "../components/fragments/Certificates.jsx";

export default function About() {
    let {pageCategory} = useContext(PageCategoryContext);
    console.log(`${pageCategory} rendered`);

    const {data, isLoading} = useDataFetch(SingleEntryURL(ABOUT_ID));

    return (
        <MainLayout>
            <div style={pageStyle}>
                {isLoading || !data ? (
                    <CustomSkeleton/>
                ) : (
                    <>
                        <Row>
                            <Col xs={0} sm={0} md={24}>
                                <Image
                                    alt="Placeholder team picture"
                                    src="http://placekitten.com/1800/400"
                                    // width={1800}
                                    // height={600}
                                    preview={false}
                                />
                            </Col>
                        </Row>
                        <TeamMembers
                            componentTitle={data.fields.title}
                            componentBody={data.fields.body}
                        />
                        <CustomBanner bannerContent={""}/>
                        <Divider orientation="left">Certificates</Divider>
                        <Certificates/>
                    </>
                )}
            </div>
        </MainLayout>
    );
}
