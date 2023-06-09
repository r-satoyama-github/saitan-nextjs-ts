"use client";
import { FC, memo, useCallback, useContext, useEffect } from "react";
import { CompleteContext } from "~/providers/complete-provider";
import { ColumnContainer } from "~/components/containers/column-container";
import { CountContext } from "~/providers/count-provider";
import { NumberCard } from "./number-card";
import { Database } from "~/types/database.types";

const colors: Array<string> = [
  "#7ac70c",
  "#faa918",
  "#14d4f4",
  "#a560e8",
  "#e53838",
  "#31B9B0",
  "#559CEE",
  "#E2E745",
  "#F56452",
  "#EFCFEB",
  "#2C99E2",
  "#8153CF",
  "#00F998",
  "#F36823",
];

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];
type Props = {
  items: Array<QuestionNumber>;
  setItems: (items: Array<QuestionNumber>) => void;
  itemHistories: Array<Array<QuestionNumber>>;
  setItemHistories: (itemHistories: Array<Array<QuestionNumber>>) => void;
  countTimerStop: () => void;
};
export const NumberCardList: FC<Props> = memo(function NumberCardList(props) {
  // console.log("NumberCardList Rendering");
  const { items, setItems, countTimerStop, itemHistories, setItemHistories } =
    props;

  // Contextの取得
  const countContext = useContext(CountContext);
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { count, setCount } = countContext;
  const { setIsComplete } = completeContext;

  // イベント関数
  // const CheckOrderAndCountUp = (tmpItems: Array<Number>) => {
  const CheckOrderAndCountUp = (tmpItems: Array<QuestionNumber>) => {
    console.log("CountUP", count);
    // 並び替えカウントアップ
    setCount(count + 1);

    // 整列しているかどうかのチェック
    if (IsOrdered(tmpItems.length, tmpItems)) {
      countTimerStop();
      setIsComplete(true);
    }

    // 並び替え履歴に追加
    // setItemHistories([...itemHistories, tmpItems]);
    setItemHistories([...itemHistories, tmpItems]);

    // 表示するリストに再セット
    // setItems([...tmpItems]);
    setItems([...tmpItems]);
  };

  // 上ボタン押下
  const onClickUp = (index: number) => {
    const tmpItems = [...items];
    if (index != 0) {
      tmpItems.splice(index - 1, 2, tmpItems[index], tmpItems[index - 1]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp(tmpItems);
  };

  // 下ボタン押下
  const onClickDown = (index: number) => {
    const tmpItems = [...items];
    if (index != tmpItems.length - 1) {
      tmpItems.splice(index, 2, tmpItems[index + 1], tmpItems[index]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp(tmpItems);
  };

  return (
    <>
      <ColumnContainer>
        {items.map((item: QuestionNumber, index: number) => {
          return (
            <NumberCard
              key={item.question_number_id}
              item={item}
              color={colors[index]}
              onClickUp={() => onClickUp(index)}
              onClickDown={() => onClickDown(index)}
            />
          );
        })}
      </ColumnContainer>
    </>
  );
});

// 並びのチェック
const IsOrdered = (until: number, items: Array<QuestionNumber>) => {
  for (let i = 0; i < until; i++) {
    if (items[i].number != i + 1) {
      return false;
    }
  }
  return true;
};
