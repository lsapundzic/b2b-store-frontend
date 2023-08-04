import { Card, Image } from "antd";
import Link from "next/link";
const { Meta } = Card;

const ProductPreview = () => {
  return (
    <Link href={`/products/${product}`}>
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
    </Link>
  );
};

export default ProductPreview;
