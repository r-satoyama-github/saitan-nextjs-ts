"use client";

import { useContext, useEffect, useState } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import Header from "~/components/layouts/header";
import { CompleteContext } from "~/components/providers/complete-provider";
import { CountStatusContext } from "~/components/providers/count-status-provider";
import { GameContext } from "~/components/providers/game-provider";
import { Heading2 } from "~/components/texts/heading2";
import { CountStatus } from "./count-status";
import { Order } from "./order";
import { PrimaryButton } from "~/components/buttons/primary-button";
import styled from "styled-components";
import { Text } from "~/components/texts/text";
import { RowContainer } from "~/components/containers/row-container";
import { Number } from "~/types/number";

export const PlayField = () => {
  console.log("PlayField Rendering");
  // Contextの取得
  const countStatusContext = useContext(CountStatusContext);
  const gameContext = useContext(GameContext);
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { count, setCount, itemHistories, setItemHistories, start } =
    countStatusContext;
  const { user } = gameContext;
  const { isComplete, setIsPlaying } = completeContext;

  // 変数の定義
  const fixItems: Array<Number> = [
    { id: 2, color: "rgba(30, 190, 62,0.5)" },
    { id: 1, color: "rgba(117, 201, 68,0.5)" },
    { id: 3, color: "rgba(22, 3, 123,0.5)" },
    { id: 4, color: "rgba(187, 200, 121,0.5)" },
    { id: 5, color: "rgba(192, 19, 112,0.5)" },
  ];

  // Stateの定義
  const [items, setItems] = useState<Array<Number>>(fixItems);

  // 初回実行処理
  useEffect(() => {
    // 最初の一回のみカウント開始
    start();

    // 最初の並びを履歴に追加
    itemHistories.push([...fixItems]);
    setItemHistories([...itemHistories]);
  }, []);

  // イベント関数
  // 結果ボタン押下
  const onClickResult = () => {
    console.log("Result Click", gameContext);
    setIsPlaying(false);
  };

  // 戻るボタン押下
  const onClickBack = () => {
    console.log("OnClick Back");
    if (count < 1) return;
    setCount(count - 1);
    setItems(itemHistories[count - 1]);
    setItemHistories([itemHistories.pop()!!]);
  };

  // リセットボタン押下;
  const onClickReset = () => {
    console.log("ResetButton Clicked");
    // 経過時間を00:00にする必要がある
    // stop();
    // 画面のリロード
    // router.refresh();
    if (confirm("リセットしてやり直しますか？")) {
      window.location.reload();
    }
  };

  return (
    <>
      <Header />
      <ColumnContainer>
        <Heading2>1から順にSAITANでならべよう</Heading2>

        {/* カウント表示部 */}
        <CountStatus />

        {/* リスト表示 */}
        <Order items={items} setItems={setItems} />

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
