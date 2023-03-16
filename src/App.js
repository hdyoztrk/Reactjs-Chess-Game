import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Board from "./Board";
import game, { init } from "./Game";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState([]);
  const [gameOver, setgameOver] = useState();
  const [result, setresult] = useState();

  useEffect(() => {
    init();
    const subscribe = game.subscribe((subscribe) => {
      setBoard(subscribe.chess);
      setgameOver(subscribe.gameOver);
      setresult(subscribe.result);
    });
    return () => subscribe.unsubscribe();
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-black h-screen flex items-center justify-center">
        {gameOver && (
          <div className="absolute bg-white bg-opacity-80  rounded-lg p-4 flex flex-col items-center justify-center">
            <h1 class="font-semibold">Game Over !</h1>
            {result && <div>{result}</div>}
          </div>
        )}
        <Board board={board} />
      </div>
    </DndProvider>
  );
}

export default App;
