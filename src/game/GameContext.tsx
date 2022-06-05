import { createContext, FC, PropsWithChildren, useContext } from "react";
import { Game } from "./script/game";

const GameCtx = createContext(new Game(0, 0));

const GameProvider: FC<{ store: Game; children: PropsWithChildren<any> }> = ({
  store,
  children,
}) => {
  return <GameCtx.Provider value={store}>{children}</GameCtx.Provider>;
};

const useGameStore = () => {
  return useContext(GameCtx);
};

export { GameProvider, useGameStore };
