import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  style?: {};
  children: ReactNode;
};
export const Text: FC<Props> = (props) => {
  const { style = {}, children } = props;
  return (
    <>
      <SP style={style}>{children}</SP>
    </>
  );
};

const SP = styled.p`
  font-size: var(--body-mobile);
  @media (min-width: 768px) {
    font-size: var(--body);
  }
`;
