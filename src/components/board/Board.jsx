import React, { useRef, useEffect } from "react";
import "./Board.css";
import { createBoard } from "../../life";

const Board = () => {
  const canvasRef = useRef(null);
  var squareLength = window.innerHeight / 30;

  var ctx;

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

  useEffect(() => {
    const canvas = canvasRef.current;
    // Set canvas size here. Not in css
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");
    drawGrid();
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default Board;
