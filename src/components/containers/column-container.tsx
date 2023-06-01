import { FC, ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode;
};
export const ColumnContainer: FC<Props> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
