import { useContext } from "react";
import { CompleteContext } from "../providers/complete-provider";
import { CountContext } from "~/providers/count-provider";
import { SecondsContext } from "~/providers/seconds-provider";
import { ItemHistoryContext } from "~/providers/item-history-provider";
import { Number } from "~/types/number";

export const useInit = () => {
  // Contextの取得
  const countStatusContext = useContext(CountContext);
  const secondsContext = useContext(SecondsContext);
  const completeContext = useContext(CompleteContext);
  const itemHistoryContext = useContext(ItemHistoryContext);

  // 関数の取得
  const { setCount } = countStatusContext;
  const { setSeconds } = secondsContext;
  const { setIsComplete, setIsPlaying } = completeContext;
  const { setItems, setItemHistories } = itemHistoryContext;

  // 変数の定義
  // const fixItems: Array<Number> = [
  //   { id: 2, color: "rgba(30, 190, 62,0.5)" },
  //   { id: 1, color: "rgba(117, 201, 68,0.5)" },
  //   { id: 3, color: "rgba(22, 3, 123,0.5)" },
  //   { id: 4, color: "rgba(187, 200, 121,0.5)" },
  //   { id: 5, color: "rgba(192, 19, 112,0.5)" },
  // ];

  const fixItems: Array<Number> = [
    { id: 2, color: "#7ac70c" },
    { id: 1, color: "#faa918" },
    { id: 3, color: "#14d4f4" },
    { id: 4, color: "#a560e8" },
    { id: 5, color: "#e53838" },
  ];

  // ゲームの初期化
  const initiateGame = () => {
    setCount(0);
    setSeconds(0);
    setIsComplete(false);
    setIsPlaying(true);
    setItems(fixItems);
    setItemHistories([fixItems]);
  };

  return { initiateGame };
};
