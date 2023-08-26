"use client";

import {useContext} from "react";
import MainLayout from "../MainLayout.jsx";
import {PageCategoryContext} from "../layout.js";
import ProductsDisplayWindow from "@/app/components/ProductsDisplayWindow";
import {Col, Row} from "antd";
import {useDataRetriever} from "@/app/hooks/useDataRetriever";
import {ContentTypeEntriesURL} from "@/app/utils/buildURL";
import {pageStyle} from "@/app/styles/globalStyles";
import CustomSkeleton from "@/app/components/CustomSkeleton";
import ProductCard from "@/app/components/ProductCard";

function Products() {
    // Global page category
    let {pageCategory} = useContext(PageCategoryContext);
    console.log(`${pageCategory} rendered`);

    // Custom hook for getting data
    const {data, isLoading} = useDataRetriever(
        ContentTypeEntriesURL("product")
    );

    return (
        <MainLayout>
            <div style={pageStyle}>
                {isLoading || !data ? (
                    <CustomSkeleton/>
                ) : (
                    <ProductsDisplayWindow data={data} category={pageCategory} />
                )}
            </div>
        </MainLayout>
    );
}

export default Products;
