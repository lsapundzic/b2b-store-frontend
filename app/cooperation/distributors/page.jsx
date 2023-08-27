"use client";

// React
import { useDataFetch } from "../../hooks/useDataFetch.jsx";
import { useContext } from "react";

// Project
import { pageStyle } from "../../styles/globalStyles.js";
import { DISTRIBUTORS_ID, SingleEntryURL } from "../../utils/buildURL";
import MainLayout from "../../MainLayout.jsx";
import { PageCategoryContext } from "../../layout.js";
import CustomSkeleton from "../../components/CustomSkeleton.jsx";

// AntD
import { Typography } from "antd";
import CustomTabs from "../../components/CustomTabs.jsx";

const { Title, Paragraph } = Typography;

export default function Distributors() {
  let { pageCategory } = useContext(PageCategoryContext);
  console.log(`${pageCategory} rendered`);

  const { data, isLoading } = useDataFetch(SingleEntryURL(DISTRIBUTORS_ID));

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <CustomTabs
              rightTitle={"Become a Distributor"}
              rightDetails={data.fields.body}
              leftTitle={"Find Distributors"}
              leftDetails={"List of distributors"}
            />
          </>
        )}
      </div>
    </MainLayout>
  );
}
