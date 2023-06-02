import styled from "styled-components";
import { RowContainer } from "../containers/row-container";
import useAuth from "../../hooks/useAuth";
import { Text } from "../texts/text";

export default function Header() {
  const { session } = useAuth();

  // const text = session ? session : "ゲスト";
  const text = "guest";
  return (
    <SHeader>
      <SRowContainer>
        <Text>{text}さん</Text>
      </SRowContainer>
    </SHeader>
  );
}
const SHeader = styled.header`
  left: 0;
  z-index: 400;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--yellow-50);
  height: 5vh;
`;

const SRowContainer = styled(RowContainer)`
  justify-content: right;
`;
