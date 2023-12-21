import React, { useRef, useEffect, useState } from "react";
import "./Board.css";
import { createBoard, updateBoard } from "../../life";

const Board = () => {
  // Setup gameboard
  var squareLength = 100;
  const rows = Math.ceil(window.innerHeight / squareLength);
  const cols = Math.ceil(window.innerWidth / squareLength);
  console.log(rows, cols);
  const [gameBoard, setGameBoard] = useState(createBoard(rows, cols));

  const [loopMutex, setLoopMutex] = useState(true);
  const [isSetup, setIsSetup] = useState(false);

  const canvasRef = useRef(null);
  var ctx;

  // Helper functions for drawing
  function drawLine(from, to) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  function drawGrid() {
    for (var i = 0; i <= window.innerHeight; i += squareLength) {
      drawLine(
        { x: 0, y: i + squareLength },
        { x: window.innerWidth, y: i + squareLength }
      );
    }
    for (var i = 0; i <= window.innerWidth; i += squareLength) {
      drawLine(
        { x: i + squareLength, y: 0 },
        { x: i + squareLength, y: window.innerHeight }
      );
    }
  }

  function drawBoard() {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawGrid();
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        if (gameBoard[i][j] === 1) {
          ctx.fillRect(
            i * squareLength,
            j * squareLength,
            squareLength,
            squareLength
          );
        }
      }
    }
  }

  const iterate = async () => {
    try {
      drawBoard();
      console.table(gameBoard);
      setGameBoard(updateBoard(gameBoard));
      await delay(1000);
    } catch (e) {
      console.log(e);
    }
    console.log("iteration");
    setLoopMutex(!loopMutex);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleResize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);

  // Main game loop
  useEffect(() => {
    if (!isSetup) {
      // Setup oscilator patterns in board
      // Beacon
      gameBoard[1][1] = 1;
      gameBoard[1][2] = 1;
      gameBoard[2][1] = 1;
      gameBoard[3][4] = 1;
      gameBoard[4][3] = 1;
      gameBoard[4][4] = 1;

      // Blinker
      gameBoard[11][1] = 1;
      gameBoard[11][2] = 1;
      gameBoard[11][3] = 1;
      setIsSetup(true);
    }
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    handleResize();

    // Set canvas size here. Not in css

    iterate();
  }, [loopMutex]);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default Board;
