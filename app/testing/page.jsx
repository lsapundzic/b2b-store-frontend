"use client";
// React imports
import { usePageContent } from "../hooks/usePageContent";
import { useState } from "react";
import { ContentTypeEntriesURL } from "../utils/buildURL";

import { Empty, Skeleton } from "antd";

const Testing = () => {
  // Fetch all products
  const { data, isLoading } = usePageContent(ContentTypeEntriesURL("product"));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  const filteredcontent = data.items.filter(
    (filtered) => filtered.fields.category === "Microscope"
  );

  console.log("Filtered content: ", filteredcontent);

  return (
    <div>
      <h1>TESTING GROUND</h1>

      {filteredcontent.map((product, id) => (
        <div key={id}>
          Product: {product.fields.name}, {product.fields.category}
        </div>
      ))}
    </div>
  );
};

export default Testing;
