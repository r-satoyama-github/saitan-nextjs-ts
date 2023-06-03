import styled from "styled-components";
import { RowContainer } from "../containers/row-container";
import useAuth from "../../hooks/useAuth";
import { Text } from "../texts/text";
import { useContext } from "react";
import { GameContext } from "~/providers/game-provider";

export default function Header() {
  // Contextの取得
  const gameContext = useContext(GameContext);

  // Contextから変数の取得
  const { user } = gameContext;

  // カスタムHooks
  // const { session } = useAuth();

  // const text = session ? session : "ゲスト";
  return (
    <SHeader>
      <SRowContainer>
        <Text>{user}サン</Text>
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
