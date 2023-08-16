import Paragraph from "antd/es/typography/Paragraph";

const EmptyBanner = ({ width, height, bannerMessage }) => {
  const separatorStye = {
    width: `${width}%`,
    height: `${height}px`,
  };
  return (
    <div style={separatorStye}>
      <Paragraph>{bannerMessage}</Paragraph>
    </div>
  );
};

export default EmptyBanner;
