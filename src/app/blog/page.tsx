import React from "react";

async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return <div>My Blog</div>;
}

export default Blog;
