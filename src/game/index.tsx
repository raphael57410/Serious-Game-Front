import "./style.css";
import useCanvas from "./utils/useCanvas";

function GameIndex() {
  const canvasRef = useCanvas();
  return (
    <div className={"gameContainer"}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default GameIndex;
