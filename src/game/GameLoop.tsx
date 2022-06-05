import { MutableRefObject, PropsWithChildren, useEffect, useRef } from "react";
import "./style.css";
import { loadImages } from "./utils/loadImages";
import { images } from "./resources/images";
import { Game } from "./script/game";
import { GameProvider } from "./GameContext";
export default function GameLoop(props: { children?: PropsWithChildren<any> }) {
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const GAME_WIDTH = window.innerWidth;
  const GAME_HEIGHT = window.innerHeight;
  const gameStore = new Game(GAME_WIDTH, GAME_HEIGHT);
  console.log("RENDER index");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (ctx) {
        gameStore.start(ctx);

        const gameLoop = () => {
          if (
            Game.gameWidth !== window.innerWidth ||
            Game.gameHeight !== window.innerHeight
          ) {
            gameStore.updateGameSize(window.innerWidth, window.innerHeight);
            canvas.width = Game.gameWidth;
            canvas.height = Game.gameHeight;
          }
          ctx.clearRect(0, 0, Game.gameWidth, Game.gameHeight);
          gameStore.draw();
          gameStore.update();
          requestAnimationFrame(gameLoop);
        };
        loadImages(Object.values(images), gameLoop);
      }
    }
  }, []);

  return (
    <GameProvider store={gameStore}>
      <canvas ref={canvasRef} width={GAME_WIDTH} height={GAME_HEIGHT}></canvas>
      {props.children && props.children}
    </GameProvider>
  );
}
