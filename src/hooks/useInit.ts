import { useContext } from "react";
import { CompleteContext } from "../providers/complete-provider";
import { CountContext } from "~/providers/count-provider";
import { SecondsContext } from "~/providers/seconds-provider";

export const useInit = () => {
  // Contextの取得
  const countStatusContext = useContext(CountContext);
  const secondsContext = useContext(SecondsContext);
  const completeContext = useContext(CompleteContext);

  // 関数の取得
  const { setCount } = countStatusContext;
  const { setSeconds } = secondsContext;
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
