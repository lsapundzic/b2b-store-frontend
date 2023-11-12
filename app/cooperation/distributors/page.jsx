"use client";

// React
import { useFetchData } from "../../hooks/useFetchData.jsx";
import { useContext } from "react";

// Project
import { pageStyle } from "../../styles/globalStyles.js";
import { SingleEntryURL } from "../../utils/buildURL";
import MainLayout from "../../MainLayout.jsx";
import { PageCategoryContext } from "../../layout.js";
import CustomSkeleton from "../../components/CustomSkeleton.jsx";

// AntD
import { Typography } from "antd";
import CustomTabs from "../../components/CustomTabs.jsx";
import { DISTRIBUTORS_ID } from "@/app/utils/pageID";

const { Title, Paragraph } = Typography;

export default function Distributors() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useFetchData(SingleEntryURL(DISTRIBUTORS_ID));

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <h1>Empty</h1>
          </>
        )}
      </div>
    </MainLayout>
  );
}
