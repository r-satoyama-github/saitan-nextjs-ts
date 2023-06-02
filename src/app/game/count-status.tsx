import { useContext } from "react";
import styled from "styled-components";
import { RowContainer } from "~/components/containers/row-container";
import { CountStatusContext } from "~/components/providers/count-status-provider";
import { Text } from "~/components/texts/text";

export const CountStatus = () => {
  // Contextの取得
  const countStatusContext = useContext(CountStatusContext);

  // Contextから関数の取得
  const { count, seconds } = countStatusContext;

  return (
    <>
      <SStatusRowContainer>
        <Text>
          かうんと：<SSpan>{count}</SSpan>
        </Text>
        <Text>
          けいか：
          <SSpan>
            {(() => {
              const result2 = new Date(seconds * 1000)
                .toISOString()
                .slice(14, 19);
              return result2;
            })()}
          </SSpan>
        </Text>
      </SStatusRowContainer>
    </>
  );
};

const SStatusRowContainer = styled(RowContainer)`
  justify-content: space-evenly;
  height: 50px;
  align-items: center;
`;

const SSpan = styled.span`
  font-size: var(--heading2);
  font-weight: bold;
`;
