import { Player } from "./player";
import { IPlayer } from "../interfaces/IPlayer";
import { InputHandler } from "../utils/inputHandler";
import { Background } from "./background";
import { IBackground } from "../interfaces/IBackground";
import { IGameFunctions } from "../interfaces/IGameFunctions";

export class Game implements IGameFunctions {
  static gameWidth: number;
  static gameHeight: number;
  background: IBackground;
  player: IPlayer;

  constructor(gameWidth: number, gameHeight: number) {
    Game.gameWidth = gameWidth;
    Game.gameHeight = gameHeight;
  }
  updateGameSize(gameWidth: number, gameHeight: number) {
    Game.gameWidth = gameWidth;
    Game.gameHeight = gameHeight;
  }
  start() {
    this.background = new Background();
    this.player = new Player();
    new InputHandler(this.player);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.background.draw(ctx);
    this.player.draw(ctx);
  }

  update(ctx: CanvasRenderingContext2D) {
    this.player.update(ctx);
  }
}
