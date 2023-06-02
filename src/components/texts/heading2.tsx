import { FC } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";

export const Heading2: FC<ChildrenStyleProps> = (props) => {
  const { children, style } = props;
  return (
    <>
      <SH2 style={style}>{children}</SH2>
    </>
  );
};

const SH2 = styled.h2`
  font-size: var(--small-heading2);
  @media (min-width: 768px) {
    font-size: var(--heading2);
  }
`;
