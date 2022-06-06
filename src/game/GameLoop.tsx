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
        let secondsPassed: number;
        let oldTimeStamp: number;
        let fps: number;
        let fpsLimit = 15;
        let now: number;
        let then = Date.now();
        let interval = 1000 / fpsLimit;
        let delta: number;

        const gameLoop = (timeStamp: number) => {
          requestAnimationFrame(gameLoop);
          now = Date.now();
          delta = now - then;
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

          // Calculate the number of seconds passed since the last frame
          secondsPassed = (timeStamp - oldTimeStamp) / 1000;
          oldTimeStamp = timeStamp;

          // Calculate fps
          fps = Math.round(1 / secondsPassed);

          // Draw number to the screen
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, 150, 50);
          ctx.font = "25px Arial";
          ctx.fillStyle = "black";
          ctx.fillText("FPS: " + fps, 10, 30);

          if (delta > interval) {
            gameStore.player.frame++;
            then = now - (delta % interval);
          }
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
