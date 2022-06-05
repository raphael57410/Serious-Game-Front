import { IMovingEntity } from "../interfaces/IMovingEntity";
import { IEntity } from "../interfaces/IEntity";

export function detectGroundCollision(entity: IMovingEntity, object: IEntity) {
  // const entityTop = entity.position.y;
  const entityBottom = entity.position.y + entity.height;
  const entityLeft = entity.position.x;
  // const entityRight = entity.position.x + entity.width;

  const objectTop = object.position.y;
  // const objectBottom = object.position.y + object.height;
  const objectLeft = object.position.x;
  const objectRight = object.position.x + object.width;

  if (
    entityBottom + entity.velocity.y > objectTop &&
    entityLeft > objectLeft &&
    entityLeft + entity.width / 2 < objectRight
  ) {
    return true;
  }

  return false;
}
