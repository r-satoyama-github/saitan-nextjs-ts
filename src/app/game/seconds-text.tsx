import { FC, useContext } from "react";
import styled from "styled-components";
import { Text } from "~/components/texts/text";
import { SecondsContext } from "~/providers/seconds-provider";
export const SecondsText: FC = () => {
  const secondsContext = useContext(SecondsContext);
  const { seconds } = secondsContext;
  return (
    <Text>
      ケイカジカン：
      <SSpan>
        {(() => {
          const result2 = new Date(seconds * 1000).toISOString().slice(14, 19);
          return result2;
        })()}
      </SSpan>
    </Text>
  );
};

const SSpan = styled.span`
  font-size: var(--heading2);
  font-weight: bold;
`;
