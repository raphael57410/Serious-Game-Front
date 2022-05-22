import "./style.css";
import { useWindowSize } from "./utils/windowSize";
import useCanvas from "./utils/useCanvas";

function GameIndex() {
  const GAME_SIZE = useWindowSize();

  const canvasRef = useCanvas();
  return (
    <canvas
      ref={canvasRef}
      id={"gameScreen"}
      width={GAME_SIZE.width}
      height={GAME_SIZE.height}
    ></canvas>
  );
}

export default GameIndex;
