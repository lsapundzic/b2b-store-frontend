"use client";

// Project

// Antd

import {useDataRetriever} from "@/app/hooks/useDataRetriever";
import {ContentTypeEntriesURL} from "@/app/utils/buildURL";
import useFilterProducts from "@/app/hooks/useFilterProducts";

export default function ProductsDisplay() {
    console.log("ProductsDisplay.jsx rendered")

    // Hook for getting data
    const { data, isLoading } = useDataRetriever(
        ContentTypeEntriesURL("product")
    );

    // Hook for filtering data
    const { filteredData } = useFilterProducts(data, "home");


    return (
        <div>
            <h1>Hello from Products Display</h1>
        </div>
    );
}
