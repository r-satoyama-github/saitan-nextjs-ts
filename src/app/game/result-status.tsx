import { FC, useContext } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import { CountContext } from "~/providers/count-provider";
import { GameContext } from "~/providers/game-provider";
import { SecondsContext } from "~/providers/seconds-provider";
import { ChildrenProps } from "~/types/children-props";
import styled from "styled-components";
import { Text } from "~/components/texts/text";
import { CountText } from "./count-text";
import { SecondsText } from "./seconds-text";

export const ResultStatus: FC = () => {
  // Contextの取得
  const gameContext = useContext(GameContext);
  const countContext = useContext(CountContext);
  const secondsContext = useContext(SecondsContext);

  // Contextから変数の取得
  const { user } = gameContext;
  const { count } = countContext;
  const { seconds } = secondsContext;
  return (
    <MyResultColumnContainer>
      <CountText />
      <SecondsText />
    </MyResultColumnContainer>
  );
};

const MyResultColumnContainer = styled(ColumnContainer)`
  height: 20%;
  justify-content: center;
`;
