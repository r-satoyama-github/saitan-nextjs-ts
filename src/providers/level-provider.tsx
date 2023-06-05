import { FC, ReactNode, createContext, useState } from "react";
import { Level } from "~/types/level";

export const LevelContext = createContext<LevelContextType>({
  level: { value: 1, question: 1 },
  setLevel: (level) => {},
});
type Props = {
  children: ReactNode;
};
type LevelContextType = {
  level: Level;
  setLevel: (level: Level) => void;
};

export const LevelProvider: FC<Props> = (props) => {
  const { children } = props;
  const [level, setLevel] = useState<Level>({ value: 1, question: 1 });

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};
