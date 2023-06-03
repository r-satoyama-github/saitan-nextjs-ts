"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import Header from "~/components/layouts/header";
import { CompleteContext } from "~/providers/complete-provider";
import { GameContext } from "~/providers/game-provider";
import { Heading2 } from "~/components/texts/heading2";
import { CountStatus } from "./count-status";
import { NumberCardList } from "./number-card-list";
import { PrimaryButton } from "~/components/buttons/primary-button";
import styled from "styled-components";
import { Text } from "~/components/texts/text";
import { RowContainer } from "~/components/containers/row-container";
import { Number } from "~/types/number";
import { ItemHistoryContext } from "~/providers/item-history-provider";
import { CountContext } from "~/providers/count-provider";
import { SecondsContext } from "~/providers/seconds-provider";

export const PlayField = () => {
  console.log("PlayField Rendering");
  // Contextの取得
  const countContext = useContext(CountContext);
  const secondsContext = useContext(SecondsContext);
  const completeContext = useContext(CompleteContext);
  const itemHistoryContext = useContext(ItemHistoryContext);

  // Contextから関数の取得
  const { count, setCount } = countContext;
  const { countTimerStart, countTimerStop } = secondsContext;
  const { isComplete, setIsPlaying } = completeContext;
  const { items, setItems, itemHistories, setItemHistories } =
    itemHistoryContext;

  // 変数の定義
  const fixItems: Array<Number> = [
    { id: 2, color: "rgba(30, 190, 62,0.5)" },
    { id: 1, color: "rgba(117, 201, 68,0.5)" },
    { id: 3, color: "rgba(22, 3, 123,0.5)" },
    { id: 4, color: "rgba(187, 200, 121,0.5)" },
    { id: 5, color: "rgba(192, 19, 112,0.5)" },
  ];

  // 初回実行処理
  useEffect(() => {
    // 最初の一回のみカウント開始
    countTimerStart();
  }, []);

  // イベント関数
  // 結果ボタン押下
  const onClickResult = () => {
    setIsPlaying(false);
  };

  // 戻るボタン押下
  const onClickBack = useCallback(() => {
    if (count < 1) return;
    setCount(count - 1);
    setItems(itemHistories[count - 1]);
    itemHistories.pop();
    setItemHistories([...itemHistories]);
  }, [count]);

  // リセットボタン押下;
  const onClickReset = useCallback(() => {
    console.log("ResetButton Clicked");
    // 経過時間を00:00にする必要がある
    // stop();
    // 画面のリロード
    // router.refresh();
    if (confirm("リセットしてやり直しますか？")) {
      window.location.reload();
    }
  }, []);

  return (
    <>
      <Header />
      <ColumnContainer>
        <Heading2>1から順にSAITANでならべよう</Heading2>

        {/* カウント表示部 */}
        <CountStatus />

        {/* リスト表示 */}
        <NumberCardList
          items={items}
          setItems={setItems}
          countTimerStop={countTimerStop}
          itemHistories={itemHistories}
          setItemHistories={setItemHistories}
        />

        {/* 戻る、リセットボタン 並び替えが未完了の場合表示 */}
        {isComplete || (
          <SRowContainer style={{ margin: "10px 0" }}>
            <PrimaryButton onClick={onClickBack}>もどす</PrimaryButton>
            <PrimaryButton onClick={onClickReset}>りせっと</PrimaryButton>
          </SRowContainer>
        )}

        {/* 結果表示ボタン　並び替えが完了の場合表示 */}
        {isComplete && (
          <ColumnContainer>
            <Text>完了!</Text>
            <PrimaryButton onClick={onClickResult}>けっかをみる</PrimaryButton>
          </ColumnContainer>
        )}
      </ColumnContainer>
    </>
  );
};

const SRowContainer = styled(RowContainer)`
  margin: 10px 0;
  justify-content: space-evenly;
`;
