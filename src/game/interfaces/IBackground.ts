export interface IBackground {
  gameWidth: number;
  gameHeight: number;
  position: {
    x: number;
    y: number;
  };
  img: HTMLImageElement;

  draw: (ctx: CanvasRenderingContext2D) => void;
}
