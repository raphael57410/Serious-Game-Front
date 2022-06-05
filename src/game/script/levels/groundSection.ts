import { Game } from "../game";
import { IGroundSection } from "../../interfaces/IGroundSection";

export class GroundSection implements IGroundSection {
  position: {
    x: number;
    y: number;
  };
  tileWidth = 96;
  tileHeight = 96;
  width: number;
  height: number;

  private readonly groundElement: HTMLImageElement;
  private readonly numberOfElement: number;
  private readonly startWith?: HTMLImageElement;
  private readonly endWith?: HTMLImageElement;

  constructor(
    groundElement: HTMLImageElement,
    numberOfElement: number,
    startWith?: HTMLImageElement | null,
    endWith?: HTMLImageElement | null
  ) {
    this.height = this.tileHeight;
    this.groundElement = groundElement;
    this.numberOfElement = numberOfElement;
    this.width = this.tileWidth * this.numberOfElement;
    if (startWith) {
      this.startWith = startWith;
      this.width += this.tileWidth;
    }

    if (endWith) {
      this.endWith = endWith;
      this.width += this.tileWidth;
    }

    this.position = {
      x: this.startWith ? Game.gameWidth - this.width : 0,
      y: Game.gameHeight - this.tileHeight,
    };
  }

  draw() {
    for (let i = 0; i < this.numberOfElement; i++) {
      if (this.startWith) {
        Game.ctx.drawImage(
          this.groundElement,
          Game.gameWidth - this.tileWidth * i,
          this.position.y,
          this.tileWidth,
          this.tileHeight
        );
      }
      if (this.endWith) {
        Game.ctx.drawImage(
          this.groundElement,
          this.tileWidth * i,
          this.position.y,
          this.tileWidth,
          this.tileHeight
        );
      }
    }
    if (this.startWith) {
      Game.ctx.drawImage(
        this.startWith,
        Game.gameWidth - this.tileWidth * this.numberOfElement,
        this.position.y,
        this.tileWidth,
        this.tileHeight
      );
    }
    if (this.endWith) {
      Game.ctx.drawImage(
        this.endWith,
        this.tileWidth * this.numberOfElement,
        this.position.y,
        this.tileWidth,
        this.tileHeight
      );
    }
  }
}
