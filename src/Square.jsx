import React from "react";

function Square({ children, colorCntlValue }) {
  return (
    <div
      className={`${
        colorCntlValue ? "bg-yellow-800" : "bg-yellow-100"
      } w-[80px] h[80px] flex items-center justify-center cursor-grab`}
    >
      {children}
    </div>
  );
}

export default Square;
