import { IGroundSection } from "../../interfaces/IGroundSection";
import { GroundSection } from "./ground/groundSection";
import { groundElements } from "./ground/groundElements";
import { ILevelGeneration } from "../../interfaces/ILevelGeneration";
import { IDecor } from "../../interfaces/IDecor";
import { Decor } from "./decor/Decor";
import { decorElements } from "./decor/decorElements";

export class LevelGeneration implements ILevelGeneration {
  levelType: "normal" | "hell";
  ground: IGroundSection[];
  decor: IDecor[];
  constructor(levelType = "normal") {
    this.ground = [
      new GroundSection(
        groundElements.road,
        6,
        null,
        groundElements.endRoadRight
      ),
      new GroundSection(
        groundElements.road,
        7,
        groundElements.endRoadLeft,
        null
      ),
    ];
    this.decor = [new Decor(decorElements.maison03, "left")];
  }
}
