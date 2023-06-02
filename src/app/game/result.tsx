import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/components/hooks/useAuth";
import { CompleteContext } from "~/components/providers/complete-provider";
import { CountStatusContext } from "~/components/providers/count-status-provider";
import { GameContext } from "~/components/providers/game-provider";
import { Text } from "~/components/texts/text";
import { Heading1 } from "~/components/texts/heading1";
import { Heading2 } from "~/components/texts/heading2";
import { RankerText } from "./ranker-text";
import { PrimaryButton } from "~/components/buttons/primary-button";
import styled from "styled-components";

export const Result = () => {
  // GameContext
  const gameContext = useContext(GameContext);
  const { user } = gameContext;

  // CountStatusContext
  const countStatusContext = useContext(CountStatusContext);
  const { count, seconds } = countStatusContext;

  // CompleteContext
  const completeContext = useContext(CompleteContext);
  const { setIsComplete, setIsPlaying } = completeContext;

  // const { session, profileFromGithub } = useAuth();
  // const { nickName, avatarUrl } = profileFromGithub;

  console.log("CountStatusContext", countStatusContext);
  console.log("GameContext", gameContext);

  const router = useRouter();

  const onClickFinish = () => {
    router.replace("/");
  };
  return (
    <>
      <SColumnContainer>
        {/* <Text>{nickName}</Text> */}
        <Heading1 style={{}}>けっか</Heading1>
        <MyResultColumnContainer>
          <Text>かうんと:{count}</Text>
          <Text>
            けいか:
            {(() => {
              const result2 = new Date(seconds * 1000)
                .toISOString()
                .slice(14, 19);
              return result2;
            })()}
          </Text>
        </MyResultColumnContainer>

        <RankingColumnContainer>
          <Heading2>らんきんぐ</Heading2>
          <ColumnContainer>
            <RankerText>ゲスト1さん　２回　10:00</RankerText>
            <RankerText>ゲスト2さん　２回　11:00</RankerText>
            <RankerText>ゲスト3さん　３回　10:00</RankerText>
          </ColumnContainer>
        </RankingColumnContainer>

        <ButtonColumnContainer>
          <PrimaryButton>りとらい</PrimaryButton>
          <PrimaryButton onClick={onClickFinish}>しゅうりょう</PrimaryButton>
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
