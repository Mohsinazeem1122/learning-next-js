import React from "react";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
  };

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}

export default ProductReview;
