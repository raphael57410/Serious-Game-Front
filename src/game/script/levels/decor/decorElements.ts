import { images } from "../../../resources/images";

function createImage(src: string) {
  const img = new Image();
  img.src = src;
  return img;
}

export type TDecorElements = {
  decor02: HTMLImageElement;
  decor03: HTMLImageElement;
  decor04: HTMLImageElement;
  maison01: HTMLImageElement;
  maison03: HTMLImageElement;
};
export const decorElements: TDecorElements = {
  decor02: createImage(images.decor02),
  decor03: createImage(images.decor03),
  decor04: createImage(images.decor04),
  maison01: createImage(images.maison01),
  maison03: createImage(images.maison02),
};
