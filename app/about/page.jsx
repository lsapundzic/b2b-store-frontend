"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { ABOUT_ID, SingleEntryURL } from "../utils/buildURL";
import { PageCategoryContext } from "../layout.js";
import CustomSkeleton from "../components/CustomSkeleton.jsx";
import CustomEmpty from "../components/CustomEmpty.jsx";
import CustomBanner from "../components/CustomBanner.jsx";
import TeamMembers from "../components/TeamMembers.jsx";

// AntD
import { Col, Divider, Image, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function About() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useDataRetriever(SingleEntryURL(ABOUT_ID));

  if (isLoading)
    return (
      <div style={pageStyle}>
        <CustomSkeleton />
      </div>
    );
  if (!data) return <CustomEmpty />;

  return (
    <div style={pageStyle}>
      <Row>
        <Col xs={0} sm={24}>
          <Image
            alt="Team picture"
            src="https://picsum.photos/1800/400"
            preview={false}
          />
        </Col>
      </Row>
      <TeamMembers
        componentTitle={data.fields.title}
        componentBody={data.fields.body}
      />
      <CustomBanner bannerContent={""} />
      <Divider></Divider>
      <Title level={2}>Awards & Recognitions</Title>
      <Row>
        <Col span={4}>
          <Image
            alt="CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            alt="CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            alt="CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            alt="CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            alt="CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            alt="CEO"
            src="http://placekitten.com/200/300"
            preview={false}
          ></Image>
        </Col>
      </Row>
    </div>
  );
}
