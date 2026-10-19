export default async function products({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return (
    <>
      <h1>Product ID: {productId}</h1>
    </>
  );
}