import { IPlayer } from "../interfaces/IPlayer";
import { Game } from "./game";
import { IGameProperties } from "../interfaces/IGameProperties";
import { detectGroundCollision } from "../utils/detectGroundCollision";

export class Player implements IPlayer {
  game: IGameProperties;
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
  constructor(game: IGameProperties) {
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

  draw() {
    Game.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    //Gravity
    if (this.position.y + this.velocity.y !== 0)
      this.position.y += this.velocity.y;
    this.velocity.y += this.gravity;

    //Horizontal movements
    this.position.x += this.velocity.x;

    this.game.ground.forEach((groundElement) => {
      if (detectGroundCollision(this, groundElement)) {
        this.velocity.y = 0;
        this.gravity = 0.5;
      }
    });

    if (this.position.y + this.height > Game.gameHeight) {
      this.velocity.y = 0;
      this.gravity = 0.5;
      this.position.y = Game.gameHeight - this.height;
    }
  }
}
