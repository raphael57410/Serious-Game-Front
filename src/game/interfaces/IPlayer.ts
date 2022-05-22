import { IGame } from "./IGame";

export interface IPlayer {
  game: IGame;
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

  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (ctx: CanvasRenderingContext2D) => void;
}
