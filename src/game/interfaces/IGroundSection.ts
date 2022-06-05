import { IEntity } from "./IEntity";

export interface IGroundSection extends IEntity {
  tileWidth: number;
  tileHeight: number;

  draw: () => void;
}
