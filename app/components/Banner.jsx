import Paragraph from "antd/es/typography/Paragraph";

const Banner = ({ width, height, bannerMessage }) => {
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

export default Banner;
