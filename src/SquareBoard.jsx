import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

function SquareBoard({ e, positionControl }) {
  // eslint-disable-next-line no-unused-vars
  const [isDraging, drag, dragPreview] = useDrag({
    type: "chess",
    item: { id: `${positionControl}_${e.type}_${e.color}` },
    collected: (e) => {
      return { isDraging: !!e.isDraging };
    },
  });
  const images = require(`../public/assets/images/${e.type}_${e.color}.png`);
  return (
    <div ref={drag}>
      <DragPreviewImage src={images} connect={dragPreview} />
      <img className="w-[30px]" src={images} alt=""></img>
    </div>
  );
}

export default SquareBoard;
