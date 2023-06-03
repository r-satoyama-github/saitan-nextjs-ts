import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/hooks/useAuth";
import { CompleteContext } from "~/providers/complete-provider";
import { GameContext } from "~/providers/game-provider";
import { Heading1 } from "~/components/texts/heading1";
import { Heading2 } from "~/components/texts/heading2";
import { RankerText } from "../../components/texts/ranker-text";
import { PrimaryButton } from "~/components/buttons/primary-button";
import styled from "styled-components";
import { Text } from "~/components/texts/text";
import { useCountTimer } from "~/hooks/useCountTimer";

export const Result = () => {
  // Contextの取得
  const gameContext = useContext(GameContext);
  // const countStatusContext = useContext(CountStatusContext);
  // const countContext = useContext(CountContext);
  // const secondsContext = useContext(SecondsContext);
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { user } = gameContext;
  // const { count, seconds } = countStatusContext;
  const { count, seconds } = useCountTimer();
  // const { count } = countContext;
  // const { seconds } = secondsContext;
  const { setIsComplete, setIsPlaying } = completeContext;

  // const { session, profileFromGithub } = useAuth();
  // const { nickName, avatarUrl } = profileFromGithub;

  // Hooksの取得
  const router = useRouter();

  // イベント関数
  // 終了ボタン押下
  const onClickFinish = () => {
    router.replace("/");
  };

  return (
    <>
      <SColumnContainer>
        {/* <Text>{nickName}</Text> */}
        <Heading1 style={{}}>ケッカ</Heading1>
        <MyResultColumnContainer>
          <Text>カウント:{count}カイ</Text>
          <Text>
            ケイカジカン:
            {(() => {
              const result2 = new Date(seconds * 1000)
                .toISOString()
                .slice(14, 19);
              return result2;
            })()}
          </Text>
        </MyResultColumnContainer>

        <RankingColumnContainer>
          <Heading2>ランキング</Heading2>
          <ColumnContainer>
            <RankerText>ゲスト1さん　２回　10:00</RankerText>
            <RankerText>ゲスト2さん　２回　11:00</RankerText>
            <RankerText>ゲスト3さん　３回　10:00</RankerText>
          </ColumnContainer>
        </RankingColumnContainer>

        <ButtonColumnContainer>
          <PrimaryButton>リトライ</PrimaryButton>
          <PrimaryButton onClick={onClickFinish}>シュウリョウ</PrimaryButton>
          {/* <PrimaryLink href="/">終了</PrimaryLink> */}
        </ButtonColumnContainer>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  height: 90vh;
`;

const MyResultColumnContainer = styled(ColumnContainer)`
  height: 20%;
`;

const RankingColumnContainer = styled(ColumnContainer)`
  height: 40%;
`;
const ButtonColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 20%;
`;
