import { Suspense } from "react";

export default function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      {params.then(({ productId }) => (
        <ProductContent productId={productId} />
      ))}
    </Suspense>
  );
}

function ProductContent({ productId }: { productId: string }) {
  return <h1>Product ID: {productId}</h1>
}