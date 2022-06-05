import { IMovingEntity } from "./IMovingEntity";

export interface IPlayer extends IMovingEntity {
  direction: "left" | "right";
  moveLeft: () => void;
  moveRight: () => void;
  jump: () => void;
  stop: () => void;
  draw: () => void;
  update: () => void;
}
