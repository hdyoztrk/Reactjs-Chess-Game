import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Board from "./Board";
import Game from "./Game";

function App() {
  console.log(Game);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Board />
      </div>
    </DndProvider>
  );
}

export default App;
