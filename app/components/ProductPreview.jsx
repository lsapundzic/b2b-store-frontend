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
      <Meta title="OPTIC900B" description="Binocular biological microscope" />
    </Card>
  );
};

export default ProductPreview;
