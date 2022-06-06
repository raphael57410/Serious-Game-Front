import { Game } from "../../game";
import { IGroundSection } from "../../../interfaces/IGroundSection";

export class GroundSection implements IGroundSection {
  position: {
    x: number;
    y: number;
  };
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
    this.groundElement = groundElement;
    this.numberOfElement = numberOfElement;
    this.width = Game.tileSize * this.numberOfElement;
    if (startWith) {
      this.startWith = startWith;
      this.width += Game.tileSize;
    }

    if (endWith) {
      this.endWith = endWith;
      this.width += Game.tileSize;
    }

    this.position = {
      x: this.startWith ? Game.gameWidth - this.width : 0,
      y: Game.gameHeight - Game.tileSize,
    };
  }

  draw() {
    for (let i = 0; i < this.numberOfElement; i++) {
      if (this.startWith) {
        Game.ctx.drawImage(
          this.groundElement,
          Game.gameWidth - Game.tileSize * i,
          this.position.y,
          Game.tileSize,
          Game.tileSize
        );
      }
      if (this.endWith) {
        Game.ctx.drawImage(
          this.groundElement,
          Game.tileSize * i,
          this.position.y,
          Game.tileSize,
          Game.tileSize
        );
      }
    }
    if (this.startWith) {
      Game.ctx.drawImage(
        this.startWith,
        Game.gameWidth - Game.tileSize * this.numberOfElement,
        this.position.y,
        Game.tileSize,
        Game.tileSize
      );
    }
    if (this.endWith) {
      Game.ctx.drawImage(
        this.endWith,
        Game.tileSize * this.numberOfElement,
        this.position.y,
        Game.tileSize,
        Game.tileSize
      );
    }
  }
}
