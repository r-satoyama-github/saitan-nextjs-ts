import { useContext } from "react";
import { CountStatusContext } from "../providers/count-status-provider";
import { CompleteContext } from "../providers/complete-provider";

export const useInit = () => {
  // Contextの取得
  const countStatusContext = useContext(CountStatusContext);
  const completeContext = useContext(CompleteContext);

  // 関数の取得
  const { setCount, setSeconds } = countStatusContext;
  const { setIsComplete, setIsPlaying } = completeContext;

  // ゲームの初期化
  const initiateGame = () => {
    setCount(0);
    setSeconds(0);
    setIsComplete(false);
    setIsPlaying(true);
  };

  return { initiateGame };
};
