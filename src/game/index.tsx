import "./style.css"
import "./script/main"
import { useWindowSize } from "./windowSize";
export default function GameIndex() {
    const GAME_SIZE = useWindowSize();
    console.log(GAME_SIZE)
    return (
        <canvas width={GAME_SIZE.width} height={GAME_SIZE.height}></canvas>
    );
}