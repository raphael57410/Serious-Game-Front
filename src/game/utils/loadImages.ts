export function loadImages(images: Array<string>, onComplete: () => void) {
  let loaded = 0;

  function onLoad() {
    loaded++;
    console.log("load");
    if (loaded === images.length) {
      onComplete();
    }
  }

  for (const imageLink of images) {
    let img = new Image();
    img.src = imageLink;
    console.log(img);
    img.addEventListener("load", onLoad);
  }
}
