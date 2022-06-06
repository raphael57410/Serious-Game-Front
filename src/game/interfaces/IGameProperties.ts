import { IGroundSection } from "./IGroundSection";
import { ILevelGeneration } from "./ILevelGeneration";

export interface IGameProperties {
  ground: IGroundSection[];
  level: ILevelGeneration;
}
