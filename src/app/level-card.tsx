import { FC, ReactNode } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";
type Props = {
  children: number;
  style?: {};
  onClick: () => void;
};
export const LevelCard: FC<Props> = (props) => {
  const { children, style, onClick } = props;
  return (
    <SDiv style={style} onClick={onClick}>
      <SP>{children}</SP>
    </SDiv>
  );
};

const SDiv = styled.div`
  width: 100%;
  height: 10vh;
  border-radius: 10%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow-10);
`;

const SP = styled.p`
  font-weight: bold;
  font-size: var(--heading1);
`;
