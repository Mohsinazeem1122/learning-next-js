import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[100px] m-2 border border-black flex justify-center items-center">
      {children}
    </div>
  );
}

export default Card;
