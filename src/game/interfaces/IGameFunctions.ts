export interface IGameFunctions {
  updateGameSize: (gameWidth: number, gameHeight: number) => void;
  start: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (ctx: CanvasRenderingContext2D) => void;
}
