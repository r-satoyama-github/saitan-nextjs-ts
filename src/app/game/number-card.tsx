import Image from "next/image";
import { FC } from "react";
import { Text } from "~/components/texts/text";
import { Number } from "~/types/number";
import styled from "styled-components";
import { RowContainer } from "~/components/containers/row-container";
import { Database } from "~/types/database.types";

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];
type Props = {
  item: QuestionNumber;
  color: string;
  onClickUp: () => void;
  onClickDown: () => void;
};
export const NumberCard: FC<Props> = (props) => {
  const { item, onClickUp, onClickDown, color } = props;
  return (
    // <SItemRowContainer style={{ backgroundColor: item.color }}>
    <SItemRowContainer style={{ backgroundColor: color }}>
      <Image
        src="/triangle.svg"
        onClick={onClickDown}
        width={30}
        height={30}
        style={{ rotate: "180deg" }}
        alt="DOWN"
      />
      <Text
        style={{
          color: "var(--white)",
          fontSize: "27px",
          fontWeight: "bold",
        }}
      >
        {item.number}
      </Text>
      <Image
        src="/triangle.svg"
        onClick={onClickUp}
        width={30}
        height={30}
        alt="UP"
      />
    </SItemRowContainer>
  );
};

const SItemRowContainer = styled(RowContainer)`
  justify-content: space-around;
  height: 50px;
  align-items: center;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
`;
