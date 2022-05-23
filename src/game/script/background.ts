import { Game } from "./game";

export class Background {
  position: {
    x: number;
    y: number;
  };
  img: HTMLImageElement = new Image();

  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.img.src = "/gameAssets/environment/background.png";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      Game.gameWidth,
      Game.gameHeight
    );
  }
}
