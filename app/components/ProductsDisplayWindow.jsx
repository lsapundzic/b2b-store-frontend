"use client";

// Project

// Antd

import {useDataRetriever} from "@/app/hooks/useDataRetriever";
import {ContentTypeEntriesURL} from "@/app/utils/buildURL";
import useFilterProducts from "@/app/hooks/useFilterProducts";
import {pageStyle} from "@/app/styles/globalStyles";
import CustomSkeleton from "@/app/components/CustomSkeleton";
import {Col, Row} from "antd";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsDisplayWindow({category}) {
    console.log("ProductsDisplayWindow.jsx rendered")

    // Hook for getting data
    const {data, isLoading} = useDataRetriever(
        ContentTypeEntriesURL("product")
    );

    // Hook for filtering data
    const {filteredData} = useFilterProducts(data, category);

    return (

        <div style={pageStyle}>
            {isLoading || !data ? (
                <CustomSkeleton/>
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

    );
}
