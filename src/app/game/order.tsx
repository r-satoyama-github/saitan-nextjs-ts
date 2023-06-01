"use client";
import styled from "styled-components";
import { FC, memo, useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { CountStatusContext } from "~/components/providers/count-status-provider";
import { CompleteContext } from "~/components/providers/complete-provider";
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
  // console.log("Order Rendering UserItems", orderItems);

  // リストに表示するアイテム

  console.log("Order Rendering Items", items);

  // CountStatusContext
  const countStatusContext = useContext(CountStatusContext);
  const { count, setCount, itemHistories, setItemHistories, start, stop } =
    countStatusContext;

  // CompleteContext
  const completeContext = useContext(CompleteContext);
  const { setIsComplete } = completeContext;

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

  // 上と並び替える
  const onClickUp = (index: number) => {
    if (index != 0) {
      items.splice(index - 1, 2, items[index], items[index - 1]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp();
  };

  // 下と並び替える
  const onClickDown = (index: number) => {
    if (index != items.length - 1) {
      items.splice(index, 2, items[index + 1], items[index]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp();
  };

  // return useMemo(() => {
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
  // }, [orderItems]);
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
