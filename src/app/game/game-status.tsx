import { FC, useContext } from "react";
import styled from "styled-components";
import { RowContainer } from "~/components/containers/row-container";
import { CountText } from "./count-text";
import { SecondsText } from "./seconds-text";

export const GameStatus: FC = () => {
  return (
    <SStatusRowContainer>
      <CountText />
      <SecondsText />
    </SStatusRowContainer>
  );
};

const SStatusRowContainer = styled(RowContainer)`
  justify-content: space-evenly;
  height: 50px;
  align-items: center;
`;

const SSpan = styled.span`
  font-size: var(--heading2);
  font-weight: bold;
`;
