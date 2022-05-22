import { IGame } from "../interfaces/IGame";
import { IPlayer } from "../interfaces/IPlayer";

export class Player implements IPlayer {
  game: IGame;
  width: number;
  height: number;
  position: { x: number; y: number };
  speed: number;
  gravity: number;
  velocity: {
    x: number;
    y: number;
  };
  direction: "left" | "right";
  constructor(game: { gameWidth: number; gameHeight: number }) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.position = {
      x: 10,
      y: 10,
    };
    this.speed = 5;
    this.gravity = 0.5;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.direction = "right";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(ctx: CanvasRenderingContext2D) {
    if (this.position.y + this.velocity.y !== 0)
      this.position.y += this.velocity.y;
    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height > this.game.gameHeight) {
      this.velocity.y = 0;
      this.gravity = 0.5;
      this.position.y = this.game.gameHeight - this.height;
    }
  }
}
