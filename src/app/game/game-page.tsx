"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import Header from "~/components/layouts/header";
import { CompleteContext } from "~/providers/complete-provider";
import { Heading2 } from "~/components/texts/heading2";
import { GameStatus } from "./game-status";
import { NumberCardList } from "./number-card-list";
import { PrimaryButton } from "~/components/buttons/primary-button";
import styled from "styled-components";
import { Text } from "~/components/texts/text";
import { RowContainer } from "~/components/containers/row-container";
import { Number } from "~/types/number";
import { ItemHistoryContext } from "~/providers/item-history-provider";
import { CountContext } from "~/providers/count-provider";
import { SecondsContext } from "~/providers/seconds-provider";
import { LevelContext } from "~/providers/level-provider";
import { useSearchParams } from "next/navigation";
import { useInit } from "~/hooks/useInit";
import { useQuestionNumber } from "~/hooks/useQuestionNumber";

export const GamePage = () => {
  console.log("GamePage Rendering");
  // Contextの取得
  const countContext = useContext(CountContext);
  const secondsContext = useContext(SecondsContext);
  const completeContext = useContext(CompleteContext);
  const itemHistoryContext = useContext(ItemHistoryContext);
  const levelContext = useContext(LevelContext);

  // Contextから関数の取得
  const { count, setCount } = countContext;
  const { countTimerStart, countTimerStop } = secondsContext;
  const { isComplete, setIsPlaying } = completeContext;
  const { items, setItems, itemHistories, setItemHistories } =
    itemHistoryContext;
  const { level } = levelContext;

  // Hooks
  const router = useSearchParams();
  const qn = router.get("qn");

  const { questionNumbers, fetchQuestionNumbers } = useQuestionNumber(
    qn ?? "1"
  );

  // カスタムHooksの取得
  const { initiateGame } = useInit();

  // const { session } = useAuth();

  // 初回実行処理
  useEffect(() => {
    console.log("GamePage useEffect");
    // 最初の一回のみカウント開始
    countTimerStart();
  }, []);

  useEffect(() => {
    console.log("GamePage useEffect questionNumbers");
    initiateGame(questionNumbers);
  }, [questionNumbers]);

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
    // 画面のリロード
    // router.refresh();
    if (confirm("リセット スル？")) {
      window.location.reload();
    }
  }, []);

  return (
    <>
      <Header />
      <ColumnContainer>
        <Heading2>1カラジュン二　サイタンデ　ナラベヨウ</Heading2>

        {/* カウント表示部 */}
        <GameStatus />

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
          <ColumnContainer style={{ margin: "10px 0" }}>
            <PrimaryButton onClick={onClickBack}>モドス</PrimaryButton>
            <PrimaryButton onClick={onClickReset}>リセット</PrimaryButton>
          </ColumnContainer>
        )}

        {/* 結果表示ボタン　並び替えが完了の場合表示 */}
        {isComplete && (
          <ColumnContainer>
            <Text>オワッタ!</Text>
            <PrimaryButton onClick={onClickResult}>ケッカ　ミル</PrimaryButton>
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
