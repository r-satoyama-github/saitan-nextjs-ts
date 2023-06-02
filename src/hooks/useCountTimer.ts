import { useContext } from "react";
import { CountContext } from "~/providers/count-provider";
import { SecondsContext } from "~/providers/seconds-provider";

export const useCountTimer = () => {
  // Contextの取得
  const countContext = useContext(CountContext);
  const secondsContext = useContext(SecondsContext);

  // Contextから関数の取得
  const { count, setCount } = countContext;
  const { seconds, setSeconds, countTimerStart, countTimerStop } =
    secondsContext;

  return {
    count,
    setCount,
    seconds,
    setSeconds,
    countTimerStart,
    countTimerStop,
  };
};
