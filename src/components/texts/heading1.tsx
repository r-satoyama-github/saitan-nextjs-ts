import { FC } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";

export const Heading1: FC<ChildrenStyleProps> = (props) => {
  const { children, style } = props;
  return (
    <>
      <SH1 style={style}>{children}</SH1>
    </>
  );
};

const SH1 = styled.h1`
  font-size: var(--heading1);
`;
