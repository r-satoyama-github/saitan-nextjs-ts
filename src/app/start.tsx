// "use client";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "~/components/buttons/primary-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/hooks/useAuth";
import { CompleteContext } from "~/providers/complete-provider";
import { GameContext } from "~/providers/game-provider";
import { Heading1 } from "~/components/texts/heading1";
import { Heading2 } from "~/components/texts/heading2";
import { LevelContext } from "~/providers/level-provider";

type Props = {
  setIsMenu: (isMenu: boolean) => void;
};
export const Start: FC<Props> = (props) => {
  console.log("ENV START", process.env.url);
  console.log("ENV START", process.env.apikey);
  const { setIsMenu } = props;
  // Contextの取得
  const gameContext = useContext(GameContext);
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { user, setUser } = gameContext;
  const { setIsComplete, setIsPlaying } = completeContext;

  // Hooksの取得
  const router = useRouter();

  // Auth Github
  // const { signInWithGithub, error, session } = useAuth();

  // 初回実行処理
  useEffect(() => {
    setIsComplete(false);
    setIsPlaying(true);
  }, []);

  // イベント関数
  // ゲーム画面遷移関数
  const onClickPrimary = () => {
    setUser("TEST USER");
    setIsMenu(true);
    // router.push("/game");
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
