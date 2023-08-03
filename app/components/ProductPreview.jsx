import { Card, Image } from "antd";
const { Meta } = Card;

const ProductPreview = () => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <Image
          alt="A sample product"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default ProductPreview;
