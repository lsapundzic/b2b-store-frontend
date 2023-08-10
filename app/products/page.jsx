"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";
import { CONTACT_ID } from "../services/requests";
import { pageStyle, textStyle } from "../styles/globalStyles";

// AntD Imports
import { Empty, Skeleton, Typography, Card, Image } from "antd";
const { Title, Paragraph } = Typography;

function Products() {
  console.log("Products page rendered...");

  // For holding fetched data and loading state
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(0)
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log("Data fetched: ", data);
      })
      .catch((error) => {
        console.error("Failure to fetch data.", error);
      });
  }, []);

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  // ! For development purposes
  console.log("All the products: ", data.items);

  const tempImagePlaceholder = `https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png`;
  return (
    <div style={pageStyle}>
      <Typography>
        <Title>All Products</Title>
        {data.items.map((product, index) => (
          <Card
            key={index}
            style={{ width: 300 }}
            hoverable
            cover={
              <Image alt="product image" src="http://placekitten.com/200/300" />
            }
          >
            <p>{product.fields.name}</p>
            <p>{product.fields.description}</p>
          </Card>
        ))}
      </Typography>
    </div>
  );
}

export default Products;
