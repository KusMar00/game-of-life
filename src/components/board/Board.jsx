import React, { useRef, useEffect } from "react";
import "./Board.css";

const Board = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default Board;
