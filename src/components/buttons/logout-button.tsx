import { useContext } from "react";
import { GameContext } from "../../providers/game-provider";
import useAuth from "../../hooks/useAuth";

const LogoutButton = () => {
  const gameContext = useContext(GameContext);
  const { user, setUser } = gameContext;

  const { signOut } = useAuth();

  const onClickLogout = () => {
    if (confirm(`${user}さん ログアウトしますか？`)) {
      setUser("ゲスト");
      signOut();
    }
  };
  return <button onClick={onClickLogout}>Logout</button>;
};

export default LogoutButton;
