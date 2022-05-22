import { useEffect, useRef } from "react";
import { Game } from "../game/script/game";

const useCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas: HTMLCanvasElement;
    if (canvasRef.current) {
      canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")!;
      let animationFrameId: number;
      const game = new Game(window.innerWidth, window.innerHeight);
      game.start();
      const render = () => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        game.draw(ctx);
        game.update(ctx);
        animationFrameId = requestAnimationFrame(render);
      };
      render();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    } else return;
  }, []);

  return canvasRef;
};

export default useCanvas;
