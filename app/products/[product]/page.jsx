/*
- Product page can access assetID which was passed as a slug by the ProductCard component.
- It uses the entryID to fetch entry data  
- With retreived entry data it can access assetID which is passed to ImageAssets component to generate an image
*/

"use client";

// React imports
import { usePageContent } from "../../hooks/usePageContent.jsx";

// Project imports
import { textStyle, pageStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL.jsx";
import ImageAsset from "../../components/ImageAsset.jsx";

// AntD imports
import {
  Badge,
  Button,
  Col,
  Divider,
  Empty,
  List,
  Row,
  Skeleton,
  Space,
  Tabs,
  Typography,
} from "antd";

import Layout, { Content } from "antd/es/layout/layout.js";
import TCCard from "@/app/components/TCCard.jsx";
const { Title, Paragraph } = Typography;

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;
  console.log("Product.jsx");

  const { data, isLoading } = usePageContent(SingleEntryURL(product));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Description`,
      children: `${data.fields.description}`,
    },
    {
      key: "2",
      label: `Specifications`,
      children: `${data.fields.name} technical specifications placeholder`,
    },
  ];

  return (
    <div style={pageStyle}>
      <Layout>
        <Content>
          <Row gutter={[64, 24]}>
            <Col span={8}>
              <ImageAsset
                style={{ paddingTop: "26.6" }}
                assetID={data.fields.image.sys.id}
                width={"auto"}
                height={"auto"}
                preview={true}
              />
            </Col>

            <Col span={11}>
              <Typography>
                <Title level={3}>
                  {data.fields.name} - {data.fields.fullName}
                </Title>
                <p>
                  Category: {data.fields.category} | SKU: {data.fields.sku}
                </p>
                <Divider />
                <Paragraph style={textStyle}>
                  {data.fields.description}
                </Paragraph>
                <Divider />
                <Button
                  type="primary"
                  style={{
                    width: `100%`,
                    height: 45,
                    backgroundColor: "green",
                  }}
                >
                  Request a Quote
                </Button>
              </Typography>
            </Col>
            <Col span={5}>
              <TCCard />
            </Col>
          </Row>
          <div style={{ height: "120px" }}></div>
          <Row gutter={[16, 24]}>
            <Col span={24}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                centered
                onChange={onChange}
                style={{ height: "250px" }}
              />
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col span={24}>
              <Divider orientation="left" orientationMargin="0">
                Terms & Conditions
              </Divider>
              <Paragraph>
                1. Product Orders 1.1 All product orders are subject to
                availability and acceptance by [Your Company Name]. 1.2 The
                prices of products displayed on our website are in [currency]
                and do not include applicable taxes, shipping, handling, and
                other charges, unless stated otherwise. 2. Order Confirmation
                2.1 Once you place an order, you will receive an order
                confirmation email containing your order details and an order
                number. This email does not signify our acceptance of your
                order, but merely confirms that we have received it. 2.2
                Acceptance of your order occurs when we ship the product(s) to
                you. We reserve the right to reject any order at our discretion.
                3. Payment 3.1 Payment for product orders is due at the time of
                purchase. 3.2 Payment methods accepted include [list accepted
                payment methods]. 3.3 You agree to provide accurate and
                up-to-date payment information. By providing your payment
                details, you confirm that you are authorized to use the selected
                payment method. 4. Shipping & Delivery 4.1 Shipping costs are
                calculated based on the destination, shipping method, and order
                weight. These costs will be clearly stated during the checkout
                process. 4.2 Delivery times are estimates and may vary due to
                factors beyond our control. 4.3 We are not responsible for
                delays or damages caused by shipping carriers.
              </Paragraph>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
