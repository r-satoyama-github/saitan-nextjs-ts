import { FC, createContext, useState } from "react";
import { ChildrenProps } from "~/types/children-props";
import { Number } from "~/types/number";

type ItemHistoryContextType = {
  items: Array<Number>;
  setItems: (items: Array<Number>) => void;
  itemHistories: Array<Array<Number>>;
  setItemHistories: (itemHistroies: Array<Array<Number>>) => void;
};

export const ItemHistoryContext = createContext<ItemHistoryContextType>({
  items: [],
  setItems: (items) => {},
  itemHistories: [],
  setItemHistories: (itemHistroies) => {},
});

export const ItemHistoryProvider: FC<ChildrenProps> = (props) => {
  const { children } = props;
  const [items, setItems] = useState<Array<Number>>([]);
  const [itemHistories, setItemHistories] = useState<Array<Array<Number>>>([]);
  return (
    <ItemHistoryContext.Provider
      value={{ items, setItems, itemHistories, setItemHistories }}
    >
      {children}
    </ItemHistoryContext.Provider>
  );
};
