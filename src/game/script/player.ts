import { IPlayer } from "../interfaces/IPlayer";
import { Game } from "./game";

export class Player implements IPlayer {
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
  constructor() {
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

  moveLeft() {
    this.velocity.x = -this.speed;
    this.direction = "left";
  }
  moveRight() {
    this.velocity.x = this.speed;
    this.direction = "right";
  }
  jump() {
    this.velocity.y -= 18;
  }
  stop() {
    this.velocity.x = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(ctx: CanvasRenderingContext2D) {
    if (this.position.y + this.velocity.y !== 0)
      this.position.y += this.velocity.y;
    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height > Game.gameHeight) {
      this.velocity.y = 0;
      this.gravity = 0.5;
      this.position.y = Game.gameHeight - this.height;
    }
  }
}
