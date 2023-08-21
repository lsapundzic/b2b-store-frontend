"use state";

// Project imports
import { textStyle } from "../styles/globalStyles.js";

// AntD imports
import { Tabs } from "antd";

export default function CustomTab({
  leftTabTltle,
  leftTabDescription,
  rightTabTitle,
  rightTabDescription,
}) {
  // Content content
  const tabsItems = [
    {
      key: "1",
      label: `${leftTabTltle}`,
      children: `${leftTabDescription}`,
    },
    {
      key: "2",
      label: `${rightTabTitle}`,
      children: `${rightTabDescription}`,
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
