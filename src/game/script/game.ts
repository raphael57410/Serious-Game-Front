import { Player } from "./character/player";
import { IPlayer } from "../interfaces/IPlayer";
import { InputHandler } from "../utils/inputHandler";
import { IGameFunctions } from "../interfaces/IGameFunctions";
import { Background } from "./levels/Background";
import { IBackground } from "../interfaces/IBackground";
import { IGroundSection } from "../interfaces/IGroundSection";
import { IGameProperties } from "../interfaces/IGameProperties";
import { LevelGeneration } from "./levels/LevelGeneration";
import { ILevelGeneration } from "../interfaces/ILevelGeneration";

export class Game implements IGameFunctions, IGameProperties {
  static gameWidth: number;
  static gameHeight: number;
  static tileSize: number;
  static ctx: CanvasRenderingContext2D;
  ground: IGroundSection[];
  player: IPlayer;
  background: IBackground;
  level: ILevelGeneration;

  constructor(gameWidth: number, gameHeight: number) {
    this.updateGameSize(gameWidth, gameHeight);
  }
  updateGameSize(gameWidth: number, gameHeight: number) {
    Game.gameWidth = gameWidth;
    Game.gameHeight = gameHeight;
    Game.tileSize = gameWidth / 17;
  }
  start() {
    this.player = new Player(this);
    new InputHandler(this.player);
    this.background = new Background();
    this.level = new LevelGeneration();
  }

  draw() {
    this.background.draw();
    this.level.ground.forEach((groundElement) => groundElement.draw());
    this.level.decor.forEach((decor) => decor.draw());
    this.player.draw();
  }

  update() {
    this.player.update();
  }
}
