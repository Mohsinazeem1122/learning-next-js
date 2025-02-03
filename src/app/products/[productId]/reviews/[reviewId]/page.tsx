import React from "react";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}

export default ProductReview;
