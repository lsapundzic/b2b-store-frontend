"use client";

export default function Product({ params }) {
  // For accessing slug which is the entryID
  const { product } = params;

  // Fetch entry data
  const { data, isLoading } = useFetchData(SingleEntryURL(product));

  console.log(`Product page rendered`);

  return (
    <MainLayout>
      <div style={pageStyle}>
        {isLoading || !data ? (
          <CustomSkeleton />
        ) : (
          <>
            <Layout>
              <Content>...</Content>
            </Layout>
          </>
        )}
      </div>
    </MainLayout>
  );
}
