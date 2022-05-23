import { Game } from "../script/game";
import { IGameFunctions } from "../interfaces/IGameFunctions";
import { loadImages } from "./loadImages";
import { images } from "./images";

let game: IGameFunctions;
let animationFrameId: number;
const gameContainer: HTMLDivElement | null =
  document.querySelector(".gameContainer");
export class gameState {
  static start() {
    game = new Game(window.innerWidth, window.innerHeight);
    game.start();
  }

  static loop(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const render = () => {
      if (gameContainer) {
        if (
          canvas.width !== gameContainer?.offsetWidth ||
          canvas.height !== gameContainer?.offsetHeight
        ) {
          canvas.width = gameContainer?.offsetWidth;
          canvas.height = gameContainer?.offsetHeight;
          game.updateGameSize(canvas.width, canvas.height);
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.draw(ctx);
      game.update(ctx);
      animationFrameId = window.requestAnimationFrame(render);
    };
    //Load all images before executing the game loop
    loadImages(images, render);
  }

  static stop() {
    window.cancelAnimationFrame(animationFrameId);
  }
}
