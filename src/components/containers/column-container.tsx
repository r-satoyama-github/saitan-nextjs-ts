import { FC, ReactNode } from "react";
import styled from "styled-components";
import { ChildrenStyleProps } from "~/types/children-style-props";

export const ColumnContainer: FC<ChildrenStyleProps> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
