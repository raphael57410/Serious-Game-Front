export function loadImages(
  images: { [key: string]: string },
  onComplete: () => void
) {
  let loaded = 0;
  function onLoad() {
    loaded++;
    if (loaded === Object.keys(images).length) {
      onComplete();
    }
  }

  for (const imageLink of Object.values(images)) {
    let img = new Image();
    img.src = imageLink;
    img.addEventListener("load", onLoad);
  }
}
