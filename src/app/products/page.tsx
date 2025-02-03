import Link from "next/link";
import React from "react";

function ProductList() {
  return (
    <>
      <h1 className="text-center">Product List</h1>
      <Link href={"/products/1"}>
        <h2>Product 1</h2>
      </Link>
      <Link href={"/products/2"}>
        <h2>Product 2</h2>
      </Link>
      <Link href={"/products/3"}>
        <h2>Product 3</h2>
      </Link>
    </>
  );
}

export default ProductList;
