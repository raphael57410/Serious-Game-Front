export class Background {
  gameWidth: number;
  gameHeight: number;
  position: {
    x: number;
    y: number;
  };
  img: HTMLImageElement = new Image();

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
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
      this.gameWidth,
      this.gameHeight
    );
  }
}
