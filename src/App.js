import "./App.css";
import Controls from "./components/controls/Controls";
import Info from "./components/info/Info";
import Board from "./components/board/Board";
import useWindowDimensions from "./WindowDimensions";
import { useCallback, useState, useRef } from "react";
import { produce } from "immer";

const operations = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

function App() {
  const { height, width } = useWindowDimensions();
  const [cellSize, setCellSize] = useState(15);
  const [numCols, setNumCols] = useState(Math.floor(width / cellSize));
  const [numRows, setNumRows] = useState(Math.floor(height / cellSize));

  const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              let newI = i + x;
              let newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 100);
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          setGrid(generateEmptyGrid);
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        random
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
          height: { height },
          width: { width },
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              key={`${i}-${j}`}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: grid[i][j] ? "grey" : "white",
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
