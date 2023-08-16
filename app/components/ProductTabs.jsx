"use state";

// Project imports
import { textStyle } from "../styles/globalStyles.js";

// AntD imports
import { Tabs } from "antd";

export default function ProductTabs({
  productDescription,
  productSpecifications,
}) {
  // Content content
  const tabsItems = [
    {
      key: "1",
      label: `Description`,
      children: `${productDescription}`,
    },
    {
      key: "2",
      label: `Specifications`,
      children: `${productSpecifications} technical specifications placeholder`,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={tabsItems}
      centered
      style={textStyle}
    ></Tabs>
  );
}
