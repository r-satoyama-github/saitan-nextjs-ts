"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "~/components/buttons/primary-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/components/hooks/useAuth";
import { useInit } from "~/components/hooks/useInit";
import { CompleteContext } from "~/components/providers/complete-provider";
import { GameContext } from "~/components/providers/game-provider";
import { Heading1 } from "~/components/texts/heading1";

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

  // ボタン等のイベント関数
  // ゲーム画面遷移関数
  const onClickPrimary = () => {
    setUser("TEST USER");
    router.push("/game");
  };

  // if (session) router.push("/game");

  return (
    <>
      <SColumnContainer>
        <Heading1 style={{}}>SAITAN</Heading1>
        <SButtonColumnContainer>
          <PrimaryButton onClick={onClickPrimary}>
            ゲストではじめる
          </PrimaryButton>
          {/* <PrimaryButton onClick={signInWithGithub}> */}
          <PrimaryButton>サインインしてから</PrimaryButton>
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
