"use client";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useCallback } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";
type Props = {
  children: number;
  style?: {};
};
export const LevelCard: FC<Props> = (props) => {
  const router = useRouter();

  const onClickLevel = useCallback((item: number) => {
    router.replace("/game");
  }, []);

  const { children, style } = props;
  return (
    <SDiv style={style} onClick={() => onClickLevel(children)}>
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
