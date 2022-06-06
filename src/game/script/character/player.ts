import { IPlayer } from "../../interfaces/IPlayer";
import { Game } from "../game";
import { IGameProperties } from "../../interfaces/IGameProperties";
import { detectGroundCollision } from "../../utils/detectGroundCollision";
import { spriteList, TSprite } from "./spriteList";

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
  private readonly sprite: HTMLImageElement;
  frame: number;
  private currentSprite: TSprite;
  isInJump = false;
  private jumpStart = false;
  constructor(game: IGameProperties) {
    this.game = game;
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
    this.sprite = new Image();
    this.frame = 0;
    this.currentSprite = spriteList.idle;
    this.width = this.currentSprite.spriteWidth;
    this.height = this.currentSprite.spriteHeight;
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
    this.jumpStart = true;
    this.frame = 0;
    this.currentSprite = spriteList.jumpStart;
    this.velocity.y -= 22;
  }
  stop() {
    this.velocity.x = 0;
  }

  draw() {
    this.sprite.src = this.currentSprite.src;
    Game.ctx.drawImage(
      this.sprite,
      this.currentSprite.cropSize * this.frame,
      0,
      this.currentSprite.spriteWidth,
      this.currentSprite.spriteHeight,
      this.position.x,
      this.position.y,
      this.currentSprite.spriteWidth,
      this.currentSprite.spriteHeight
    );
  }
  update() {
    if (this.jumpStart) {
      //Check for jumpStart animation
      if (this.frame >= this.currentSprite.spriteLength - 1) {
        this.frame = 0;
        this.jumpStart = false;
      }
    } else {
      //Reset character frame
      if (this.frame >= this.currentSprite.spriteLength - 1) this.frame = 0;
    }

    //Set jump position
    if (this.velocity.y !== 0) {
      this.isInJump = true;
    } else this.isInJump = false;

    //Gravity
    this.position.y += this.velocity.y;
    this.velocity.y += this.gravity;

    //Horizontal movements
    this.position.x += this.velocity.x;

    //Check ground collision with each ground sections
    this.game.ground.forEach((groundElement) => {
      if (detectGroundCollision(this, groundElement)) {
        this.velocity.y = 0;
        this.gravity = 0.5;
      }
    });

    //Player is in the air : Jump position
    if (this.isInJump && !this.jumpStart)
      this.currentSprite = spriteList.jumpLoop;
    //Player is not moving : Idle position
    if (this.velocity.x === 0 && this.velocity.y === 0 && !this.isInJump)
      this.currentSprite = spriteList.idle;

    //Player is moving : Walk position
    if (this.velocity.x > 0 && this.velocity.y === 0 && !this.isInJump) {
      this.currentSprite = spriteList.walk;
    }
    if (this.position.y + this.height > Game.gameHeight) {
      this.velocity.y = 0;
      this.gravity = 0.5;
      this.position.y = Game.gameHeight - this.height;
    }
  }
}
