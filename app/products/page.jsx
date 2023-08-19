/*
- Products.jsx fetches all Contentful entries of the "product" content type
- Each entry has a unique ID 
- Each entry has an asset (image) that has its own unique ID
- .map function generates ProductCard components for each entry
- Each ProductCard is passed entryID which will be used in [product].jsx to fetch that page
- Each ProductCard is passed assetID which will be used by ImageAsset.jsx to generate an image
*/

"use client";

// React
import { useContext } from "react";
import { PageCategoryContext } from "../layout.js";
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";

// Project
import { pageStyle } from "../styles/globalStyles";
import ProductCard from "../components/ProductCard";
import { ContentTypeEntriesURL } from "../utils/buildURL";
import filterProducts from "../utils/filterProducts.jsx";
import CustomSkeleton from "../components/CustomSkeleton.jsx";

// AntD
import { Row, Col } from "antd";
import CustomEmpty from "../components/CustomEmpty.jsx";

function Products() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  // Fetch all products
  const { data, isLoading } = useDataRetriever(
    ContentTypeEntriesURL("product")
  );

  if (isLoading)
    return (
      <div style={pageStyle}>
        <CustomSkeleton />
      </div>
    );
  if (!data) return <CustomEmpty />;

  return (
    <div style={pageStyle}>
      <Row gutter={[32, 64]}>
        {/* For filtering products based on their category / navbar option */}
        {filterProducts(data, pageCategory).map((product) => (
          <Col
            key={product.sys.id}
            span={{
              xs: 24,
              sm: 12,
              md: 8,
              lg: 4,
            }}
          >
            <ProductCard
              entryID={product.sys.id}
              assetID={product.fields.image.sys.id}
              name={product.fields.name}
              fullName={product.fields.fullName}
              stockStatus={product.fields.inStock}
              cardWidth={300}
              cardHeight={"auto"}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
