import { FC } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";

export const Text: FC<ChildrenStyleProps> = (props) => {
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
