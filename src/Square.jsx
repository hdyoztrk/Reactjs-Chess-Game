import React from "react";
import { useDrop } from "react-dnd";
import { move } from "./Game";

function Square({ children, colorCntlValue, positionControl }) {
  const [, drop] = useDrop({
    accept: "chess",
    drop: (item) => {
      const [fromPosition] = item.id.split("_");
      move(fromPosition, positionControl);
    },
  });
  return (
    <div
      ref={drop}
      className={`${
        colorCntlValue ? "bg-yellow-800" : "bg-yellow-100"
      } w-[80px] h[80px] flex items-center justify-center cursor-grab`}
    >
      {children}
    </div>
  );
}

export default Square;
