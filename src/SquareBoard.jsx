import React from "react";

function SquareBoard({ e }) {
  const images = require(`../public/assets/images/${e.type}_${e.color}.png`);
  return (
    <div>
      <img className="w-[30px]" src={images} alt=""></img>
    </div>
  );
}

export default SquareBoard;
