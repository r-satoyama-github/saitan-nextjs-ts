"use client";
import { FC, memo, useCallback, useContext } from "react";
import { CompleteContext } from "~/providers/complete-provider";
import { Number } from "~/types/number";
import { ColumnContainer } from "~/components/containers/column-container";
import { ItemHistoryContext } from "~/providers/item-history-provider";
import { CountContext } from "~/providers/count-provider";
import { NumberCard } from "./number-card";

type Props = {
  items: Array<Number>;
  setItems: (items: Array<Number>) => void;
  countTimerStop: () => void;
};
export const Order: FC<Props> = memo((props) => {
  console.log("Order Rendering");
  const { items, setItems, countTimerStop } = props;

  // Contextの取得
  const countContext = useContext(CountContext);
  const completeContext = useContext(CompleteContext);
  const itemHistoryContext = useContext(ItemHistoryContext);

  // Contextから関数の取得
  const { count, setCount } = countContext;
  const { setIsComplete } = completeContext;
  const { itemHistories, setItemHistories } = itemHistoryContext;

  // イベント関数
  const CheckOrderAndCountUp = () => {
    console.log("CountUP", count);
    // 並び替えカウントアップ
    setCount(count + 1);

    // 整列しているかどうかのチェック
    if (IsOrdered(items.length, items)) {
      countTimerStop();
      setIsComplete(true);
    }

    // 並び替え履歴に追加
    console.log("Count Change", itemHistories);
    itemHistories.push([...items]);
    setItemHistories([...itemHistories]);

    // 表示するリストに再セット
    setItems([...items]);
  };

  // 上ボタン押下
  const onClickUp = useCallback(
    (index: number) => {
      if (index != 0) {
        items.splice(index - 1, 2, items[index], items[index - 1]);
      }
      // 並びのチェックとカウントアップ
      CheckOrderAndCountUp();
    },
    [CheckOrderAndCountUp, items]
  );

  // 下ボタン押下
  const onClickDown = useCallback(
    (index: number) => {
      if (index != items.length - 1) {
        items.splice(index, 2, items[index + 1], items[index]);
      }
      // 並びのチェックとカウントアップ
      CheckOrderAndCountUp();
    },
    [CheckOrderAndCountUp, items]
  );

  return (
    <>
      <ColumnContainer>
        {items.map((item: Number, index: number) => {
          return (
            <NumberCard
              key={item.id}
              item={item}
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
const IsOrdered = (until: number, items: Array<Number>) => {
  for (let i = 0; i < until; i++) {
    if (items[i].id != i + 1) {
      return false;
    }
  }
  return true;
};
