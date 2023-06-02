"use client";
import styled from "styled-components";
import { FC, memo, useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { CountStatusContext } from "~/providers/count-status-provider";
import { CompleteContext } from "~/providers/complete-provider";
import { Number } from "~/types/number";
import { Text } from "~/components/texts/text";
import { ColumnContainer } from "~/components/containers/column-container";
import { RowContainer } from "~/components/containers/row-container";

type Props = {
  items: Array<Number>;
  setItems: (items: Array<Number>) => void;
};
export const Order: FC<Props> = (props) => {
  console.log("Order Rendering");
  const { items, setItems } = props;

  // Contextの取得
  const countStatusContext = useContext(CountStatusContext);
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { count, setCount, itemHistories, setItemHistories, start, stop } =
    countStatusContext;
  const { setIsComplete } = completeContext;

  // イベント関数
  const CheckOrderAndCountUp = () => {
    // 並び替えカウントアップ
    setCount(count + 1);

    // 整列しているかどうかのチェック
    if (IsOrdered(items.length, items)) {
      stop();
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
  const onClickUp = (index: number) => {
    if (index != 0) {
      items.splice(index - 1, 2, items[index], items[index - 1]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp();
  };

  // 下ボタン押下
  const onClickDown = (index: number) => {
    if (index != items.length - 1) {
      items.splice(index, 2, items[index + 1], items[index]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp();
  };

  return (
    <>
      <ColumnContainer>
        {items.map((item: Number, index: number) => {
          return (
            <SItemRowContainer
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <Image
                src="/triangle.svg"
                onClick={() => onClickDown(index)}
                width={30}
                height={30}
                style={{ rotate: "180deg" }}
                alt="DOWN"
              />
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.id}
              </Text>
              <Image
                src="/triangle.svg"
                onClick={() => onClickUp(index)}
                width={30}
                height={30}
                alt="UP"
              />
            </SItemRowContainer>
          );
        })}
      </ColumnContainer>
    </>
  );
};

// 並びのチェック
const IsOrdered = (until: number, items: Array<Number>) => {
  for (let i = 0; i < until; i++) {
    if (items[i].id != i + 1) {
      return false;
    }
  }
  return true;
};

const SItemRowContainer = styled(RowContainer)`
  background-color: var(--yellow-50);
  justify-content: space-around;
  height: 50px;
  align-items: center;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
`;
