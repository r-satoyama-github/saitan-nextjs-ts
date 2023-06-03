"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "~/components/buttons/primary-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/hooks/useAuth";
import { useInit } from "~/hooks/useInit";
import { CompleteContext } from "~/providers/complete-provider";
import { GameContext } from "~/providers/game-provider";
import { Heading1 } from "~/components/texts/heading1";
import { Heading2 } from "~/components/texts/heading2";

export const Start = () => {
  // Contextの取得
  const context = useContext(GameContext);
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { user, setUser } = context;

  // Hooksの取得
  const router = useRouter();

  // カスタムHooksの取得
  const { initiateGame } = useInit();

  // Auth Github
  // const { signInWithGithub, error, session } = useAuth();

  // 初回実行処理
  useEffect(() => {
    initiateGame();
  }, []);

  // イベント関数
  // ゲーム画面遷移関数
  const onClickPrimary = () => {
    setUser("TEST USER");
    router.push("/game");
  };

  // if (session) router.push("/game");

  return (
    <>
      <SColumnContainer>
        <ColumnContainer>
          <Heading1 style={{}}>サイタン</Heading1>
          <Heading2 style={{}}>サイタンヲ　テニスルノハ　ダレダ？</Heading2>
        </ColumnContainer>

        <SButtonColumnContainer>
          <PrimaryButton onClick={onClickPrimary}>
            ゲスト　ハジメル
          </PrimaryButton>
          {/* <PrimaryButton onClick={signInWithGithub}> */}
          <PrimaryButton>ログイン　ハジメル</PrimaryButton>
          {/* {error && <p>{error}</p>} */}
        </SButtonColumnContainer>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 100vh;
`;

const SButtonColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 20%;
`;
