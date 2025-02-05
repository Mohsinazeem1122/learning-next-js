import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <h1 className="text-red-500">Welcome home!</h1>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}

export default Home;
