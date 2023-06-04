"use client";

import { useContext, useEffect } from "react";
import LogoutButton from "~/components/buttons/logout-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/hooks/useAuth";
import { CompleteContext } from "~/providers/complete-provider";
import { ResultPage } from "./result-page";
import { GamePage } from "./game-page";
import { useInit } from "~/hooks/useInit";

export default function Page() {
  console.log("Game Page Rendering");
  // Contextの取得
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { isComplete, isPlaying } = completeContext;

  // カスタムHooksの取得
  const { initiateGame } = useInit();

  // const { session } = useAuth();

  // 初回実行処理
  useEffect(() => {
    initiateGame();
  }, []);
  return (
    <>
      <ColumnContainer>
        <div style={{ height: "5vh" }}></div>

        {/* {session && <LogoutButton />} */}
        {isComplete && !isPlaying ? <ResultPage /> : <GamePage />}
      </ColumnContainer>
    </>
  );
}
