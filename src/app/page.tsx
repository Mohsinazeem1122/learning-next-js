import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/products">Products</Link>
    </>
  );
}

export default Home;
