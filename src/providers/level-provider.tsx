import { FC, ReactNode, createContext, useState } from "react";
import { Database } from "~/types/database.types";

type Level = Database["public"]["Tables"]["levels"]["Row"];
export const LevelContext = createContext<LevelContextType>({
  level: { level_id: 1, volume: 1, created_at: "", name: "" },
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
  const [level, setLevel] = useState<Level>({
    level_id: 1,
    volume: 1,
    created_at: "",
    name: "",
  });

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};
