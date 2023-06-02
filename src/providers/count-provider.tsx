import { FC, ReactNode, createContext, useState } from "react";
import { Number } from "~/types/number";

export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: (count) => {},
});

type CountContextType = {
  count: number;
  setCount: (count: number) => void;
};

type Props = {
  children: ReactNode;
};
export const CountProvider: FC<Props> = (props) => {
  const { children } = props;
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
