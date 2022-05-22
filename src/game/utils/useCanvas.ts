import { useEffect, useRef } from "react";
import { gameState } from "./gameState";

const useCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas: HTMLCanvasElement;
    if (canvasRef.current) {
      canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")!;
      gameState.start();
      gameState.loop(ctx);

      return () => {
        gameState.stop();
      };
    } else return;
  }, []);

  return canvasRef;
};

export default useCanvas;
