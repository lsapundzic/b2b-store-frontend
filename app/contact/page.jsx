"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { CONTACT_ID, SingleEntryURL } from "../utils/buildURL";
import MainLayout, { PageCategoryContext } from "../components/MainLayout.jsx";
import CustomSkeleton from "../components/CustomSkeleton.jsx";
import CustomEmpty from "../components/CustomEmpty.jsx";
import CustomBanner from "../components/CustomBanner.jsx";
import DetailedContact from "../components/DetailedContact.jsx";

// AntD
import { Col, Divider, Space, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Contact() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useDataRetriever(SingleEntryURL(CONTACT_ID));

  if (isLoading)
    return (
      <div style={pageStyle}>
        <CustomSkeleton />
      </div>
    );
  if (!data) return <CustomEmpty />;

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <Row>
              <Col span={24}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.4054066908975!2d15.641311476015872!3d46.2222820825406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47658fe591d7b31f%3A0x542687c5a45a11a4!2sSteklarska%20ulica%201a%2C%203250%20Roga%C5%A1ka%20Slatina!5e0!3m2!1sen!2ssi!4v1692469655922!5m2!1sen!2ssi"
                  width="100%"
                  height="450"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DetailedContact sectionTitle={data.fields.title} />
              </Col>
            </Row>
            <Row>
              <Col>{/* <ContactForm /> */}</Col>
            </Row>
          </>
        )}
      </div>
    </MainLayout>
  );
}
