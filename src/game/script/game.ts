import { Player } from "./player";
import { IPlayer } from "../interfaces/IPlayer";
import { InputHandler } from "../utils/inputHandler";
import { IGameFunctions } from "../interfaces/IGameFunctions";
import { Background } from "./levels/background";
import { IBackground } from "../interfaces/IBackground";
import { GroundSection } from "./levels/ground/groundSection";
import { groundElements } from "./levels/ground/groundElements";
import { IGroundSection } from "../interfaces/IGroundSection";
import { IGameProperties } from "../interfaces/IGameProperties";

export class Game implements IGameFunctions, IGameProperties {
  static gameWidth: number;
  static gameHeight: number;
  static ctx: CanvasRenderingContext2D;
  ground: IGroundSection[];
  player: IPlayer;
  background: IBackground;

  constructor(gameWidth: number, gameHeight: number) {
    this.updateGameSize(gameWidth, gameHeight);
  }
  updateGameSize(gameWidth: number, gameHeight: number) {
    Game.gameWidth = gameWidth;
    Game.gameHeight = gameHeight;
  }
  start(ctx: CanvasRenderingContext2D) {
    Game.ctx = ctx;
    this.player = new Player(this);
    new InputHandler(this.player);
    this.background = new Background();
    this.ground = [
      new GroundSection(
        groundElements.road,
        4,
        null,
        groundElements.endRoadRight
      ),
      new GroundSection(
        groundElements.road,
        5,
        groundElements.endRoadLeft,
        null
      ),
    ];
  }

  draw() {
    this.background.draw();
    this.ground.forEach((element) => element.draw());
    this.player.draw();
  }

  update() {
    this.player.update();
  }
}
