import { Game } from "../../game";
import { IDecor } from "../../../interfaces/IDecor";
import { TDecor } from "./decorElements";

export class Decor implements IDecor {
  private readonly decorElement: TDecor;
  private readonly side: "left" | "right";
  constructor(decorElement: TDecor, side: "left" | "right") {
    this.decorElement = decorElement;
    this.side = side;
  }

  draw() {
    if (this.side === "left") {
      Game.ctx.drawImage(
        this.decorElement.image,
        0,
        Game.gameHeight -
          Game.tileSize -
          Game.tileSize * this.decorElement.height,
        Game.tileSize * this.decorElement.width,
        Game.tileSize * this.decorElement.height
      );
    }
  }
}
