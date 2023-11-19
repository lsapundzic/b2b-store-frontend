import Paragraph from "antd/es/typography/Paragraph";

const CustomBanner = ({ bannerContent }) => {
  const separatorStye = {
    paddingLeft: "50px",
    width: `100%`,
    height: `50px`,
  };
  return (
    <div style={separatorStye}>
      <div>{bannerContent}</div>
    </div>
  );
};

export default CustomBanner;
