import { Game } from "../script/game";
import { IGameFunctions } from "../interfaces/IGameFunctions";
import { loadImages } from "./loadImages";
import { images } from "./images";

let game: IGameFunctions;
let animationFrameId: number;

export class gameState {
  static start() {
    game = new Game(window.innerWidth, window.innerHeight);
    game.start();
  }

  static loop(ctx: CanvasRenderingContext2D) {
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
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
