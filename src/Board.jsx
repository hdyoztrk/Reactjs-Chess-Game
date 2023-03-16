import React from "react";
import Square from "./Square";
import SquareBoard from "./SquareBoard";

function Board({ board }) {
  const colorCntlValue = (e) => {
    const x = e % 8;
    const y = Math.abs(Math.floor(e / 8) - 7);
    return (x + y) % 2 === 0;
  };

  const positionControl = (e) => {
    const x = e % 8;
    const y = Math.abs(Math.floor(e / 8) - 7);
    const xLetters = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    return `${xLetters}${y + 1}`;
  };
  return (
    <div className="w-[640px] h-[640px] bg-yellow-800 flex flex-wrap">
      {board.flat().map((e, i) => (
        <Square
          key={i}
          colorCntlValue={colorCntlValue(i)}
          positionControl={positionControl(i)}
        >
          {e && <SquareBoard positionControl={positionControl(i)} e={e} />}
        </Square>
      ))}
    </div>
  );
}

export default Board;
