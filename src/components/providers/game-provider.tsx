import { FC, ReactNode, createContext, useState } from "react";

export const GameContext = createContext<GameContextType>({
  user: "",
  setUser: (user) => {},
});

type GameContextType = {
  user: string;
  setUser: (user: string) => void;
};
type Props = {
  children: ReactNode;
};
export const GameProvider: FC<Props> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<string>("");

  return (
    <GameContext.Provider value={{ user, setUser }}>
      {children}
    </GameContext.Provider>
  );
};
