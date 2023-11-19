"use client";

import {useContext} from "react";
import MainLayout from "../MainLayout.jsx";
import {PageCategoryContext} from "../layout.js";
import DisplayWindow from "../../components/DisplayWindow";
import {useFetchData} from "@/app/hooks/useFetchData";
import {ContentTypeEntriesURL} from "@/app/utils/buildURL";
import {pageStyle} from "@/app/styles/globalStyles";
import CustomSkeleton from "../../components/CustomSkeleton";

function Products() {
    // Global page category
    let {pageCategory} = useContext(PageCategoryContext);
    console.log(`${pageCategory} rendered`);

    // Custom hook for getting data
    const {data, isLoading} = useFetchData(
        ContentTypeEntriesURL("product")
    );

    return (
        <MainLayout>
            <div style={pageStyle}>
                {isLoading || !data ? (
                    <CustomSkeleton/>
                ) : (
                    <DisplayWindow data={data} category={pageCategory}/>
                )}
            </div>
        </MainLayout>
    );
}

export default Products;
