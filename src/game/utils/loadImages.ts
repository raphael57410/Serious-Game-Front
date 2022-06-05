export function loadImages(images: string[], onComplete: () => void) {
  let imageObjects = [];

  let loaded = 0;
  function onLoad() {
    loaded++;
    console.log(loaded);
    if (loaded === images.length) {
      console.log("complete");
      onComplete();
    }
  }

  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.addEventListener("load", onLoad);
    img.src = images[i];
    imageObjects.push(img);
  }
}
