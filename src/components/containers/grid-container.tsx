import { FC } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";

export const GridContainer: FC<ChildrenStyleProps> = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
  grid-gap: 20px;
`;
