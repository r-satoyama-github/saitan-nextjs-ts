import { FC } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";

export const RowContainer: FC<ChildrenStyleProps> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
