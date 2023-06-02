import { FC, createContext, useState } from "react";
import { ChildrenProps } from "~/types/children-props";
import { Number } from "~/types/number";

type ItemHistoryContextType = {
  itemHistories: Array<Array<Number>>;
  setItemHistories: (itemHistroies: Array<Array<Number>>) => void;
};

export const ItemHistoryContext = createContext<ItemHistoryContextType>({
  itemHistories: [],
  setItemHistories: (itemHistroies) => {},
});

export const ItemHistoryProvider: FC<ChildrenProps> = (props) => {
  const { children } = props;
  const [itemHistories, setItemHistories] = useState<Array<Array<Number>>>([]);
  return (
    <ItemHistoryContext.Provider value={{ itemHistories, setItemHistories }}>
      {children}
    </ItemHistoryContext.Provider>
  );
};
