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
  // 変数の定義
  const fixItems: Array<Number> = [
    { id: 2, color: "rgba(30, 190, 62,0.5)" },
    { id: 1, color: "rgba(117, 201, 68,0.5)" },
    { id: 3, color: "rgba(22, 3, 123,0.5)" },
    { id: 4, color: "rgba(187, 200, 121,0.5)" },
    { id: 5, color: "rgba(192, 19, 112,0.5)" },
  ];

  // const [itemHistories, setItemHistories] = useState<Array<Array<Number>>>([
  //   fixItems,
  // ]);
  const [items, setItems] = useState<Array<Number>>(fixItems);
  const [itemHistories, setItemHistories] = useState<Array<Array<Number>>>([
    items,
  ]);
  return (
    <ItemHistoryContext.Provider
      value={{ items, setItems, itemHistories, setItemHistories }}
    >
      {children}
    </ItemHistoryContext.Provider>
  );
};
