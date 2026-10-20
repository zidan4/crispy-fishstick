import { Suspense } from "react";

function ProductContent({ productId }: { productId: string }) {
  return <p>Review for product { productId }</p>;
}

export default function ProductPage({ params }: { params: Promise<{ productId: string }> }) {

  return (
    <Suspense fallback={<p>Loading product...</p>}>
      {params.then(({ productId }) => (
        <ProductContent productId={productId} />
      ))}
    </Suspense>
  );
  
}