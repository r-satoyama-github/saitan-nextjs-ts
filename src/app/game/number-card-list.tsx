"use client";
import { FC, memo, useCallback, useContext, useEffect } from "react";
import { CompleteContext } from "~/providers/complete-provider";
import { ColumnContainer } from "~/components/containers/column-container";
import { CountContext } from "~/providers/count-provider";
import { NumberCard } from "./number-card";
import { Database } from "~/types/database.types";
import { QuestionNumberWithColor } from "~/types/question-number-with-color";

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];
type Props = {
  items: Array<QuestionNumberWithColor>;
  setItems: (items: Array<QuestionNumberWithColor>) => void;
  itemHistories: Array<Array<QuestionNumberWithColor>>;
  setItemHistories: (
    itemHistories: Array<Array<QuestionNumberWithColor>>
  ) => void;
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
  const CheckOrderAndCountUp = (tmpItems: Array<QuestionNumberWithColor>) => {
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
        {/* {items.map((item: QuestionNumber, index: number) => { */}
        {items.map((item: QuestionNumberWithColor, index: number) => {
          return (
            <NumberCard
              key={item.questionNumber.question_number_id}
              item={item.questionNumber}
              color={item.color}
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
const IsOrdered = (until: number, items: Array<QuestionNumberWithColor>) => {
  for (let i = 0; i < until; i++) {
    if (items[i].questionNumber.number != i + 1) {
      return false;
    }
  }
  return true;
};
