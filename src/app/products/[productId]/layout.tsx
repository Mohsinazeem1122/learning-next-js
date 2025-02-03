import React from "react";

function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div>Featured products</div>
    </>
  );
}

export default ProductDetailsLayout;
