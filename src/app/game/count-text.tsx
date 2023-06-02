import { FC, useContext } from "react";
import { Text } from "~/components/texts/text";
import styled from "styled-components";
import { CountContext } from "~/providers/count-provider";

export const CountText: FC = () => {
  const countContext = useContext(CountContext);
  const { count } = countContext;
  return (
    <Text>
      かうんと：<SSpan>{count}</SSpan>
    </Text>
  );
};

const SSpan = styled.span`
  font-size: var(--heading2);
  font-weight: bold;
`;
