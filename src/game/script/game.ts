import { IGame } from "../interfaces/IGame";
import { Player } from "./player";
import { IPlayer } from "../interfaces/IPlayer";

export class Game implements IGame {
  gameWidth: number;
  gameHeight: number;
  player: IPlayer;
  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.player = new Player(this);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.player.draw(ctx);
  }

  update(ctx: CanvasRenderingContext2D) {
    this.player.update(ctx);
  }
}
