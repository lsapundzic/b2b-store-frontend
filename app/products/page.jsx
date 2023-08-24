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
import { useContext, useEffect } from "react";
import MainLayout from "../MainLayout.jsx";
import { PageCategoryContext } from "../layout.js";
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";

// Project
import { pageStyle } from "../styles/globalStyles";
import ProductCard from "../components/ProductCard";
import { ContentTypeEntriesURL } from "../utils/buildURL";
import useFilterProducts from "../hooks/useFilterProducts.jsx";
import CustomSkeleton from "../components/CustomSkeleton.jsx";

// AntD
import { Row, Col } from "antd";

function Products() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  // Get all data
  const { data, isLoading } = useDataRetriever(
    ContentTypeEntriesURL("product")
  );

  console.log("-- PRODUCTS -- Data fetched: ", data);

  // Filter data
  const { filteredData } = useFilterProducts(data, pageCategory);

  console.log("-- PRODUCTS / Filter -- :", filteredData);

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <Row gutter={[32, 64]}>
              {/* For filtering products based on their category / navbar option */}
              {filteredData.map((product) => (
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
                    product={product}
                    cardWidth={300}
                    cardHeight={470}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Products;
