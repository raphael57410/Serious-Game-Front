export interface IPlayer {
  width: number;
  height: number;
  position: {
    x: number;
    y: number;
  };
  speed: number;
  gravity: number;
  velocity: {
    x: number;
    y: number;
  };
  direction: "left" | "right";
  moveLeft: () => void;
  moveRight: () => void;
  jump: () => void;
  stop: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (ctx: CanvasRenderingContext2D) => void;
}
