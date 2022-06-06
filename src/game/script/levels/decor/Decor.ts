import { Game } from "../../game";
import { IDecor } from "../../../interfaces/IDecor";

export class Decor implements IDecor {
  private readonly decorElement: HTMLImageElement;
  private readonly side: "left" | "right";
  constructor(decorElement: HTMLImageElement, side: "left" | "right") {
    this.decorElement = decorElement;
    this.side = side;
  }

  draw() {
    if (this.side === "left") {
      Game.ctx.drawImage(
        this.decorElement,
        0,
        Game.gameHeight - Game.tileSize - Game.tileSize * 5,
        Game.tileSize * 7,
        Game.tileSize * 5
      );
    }
  }
}
