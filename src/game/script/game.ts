import { IGame } from "../interfaces/IGame";
import { Player } from "./player";
import { IPlayer } from "../interfaces/IPlayer";
import { InputHandler } from "../utils/inputHandler";
import { Background } from "./background";
import { IBackground } from "../interfaces/IBackground";
import { IGameFunctions } from "../interfaces/IGameFunctions";

export class Game implements IGame, IGameFunctions {
  gameWidth: number;
  gameHeight: number;
  background: IBackground;
  player: IPlayer;

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.background = new Background(this.gameWidth, this.gameHeight);
    this.player = new Player(this);
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
