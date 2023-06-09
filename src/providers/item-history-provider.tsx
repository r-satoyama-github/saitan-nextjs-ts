import { FC, createContext, useState } from "react";
import { ChildrenProps } from "~/types/children-props";
import { Database } from "~/types/database.types";
import { Number } from "~/types/number";

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];
// type ItemHistoryContextType = {
//   items: Array<Number>;
//   setItems: (items: Array<Number>) => void;
//   itemHistories: Array<Array<Number>>;
//   setItemHistories: (itemHistroies: Array<Array<Number>>) => void;
// };

// export const ItemHistoryContext = createContext<ItemHistoryContextType>({
//   items: [],
//   setItems: (items) => {},
//   itemHistories: [],
//   setItemHistories: (itemHistroies) => {},
// });

type ItemHistoryContextType = {
  items: Array<QuestionNumber>;
  setItems: (items: Array<QuestionNumber>) => void;
  itemHistories: Array<Array<QuestionNumber>>;
  setItemHistories: (itemHistroies: Array<Array<QuestionNumber>>) => void;
};

export const ItemHistoryContext = createContext<ItemHistoryContextType>({
  items: [],
  setItems: (items) => {},
  itemHistories: [],
  setItemHistories: (itemHistroies) => {},
});

export const ItemHistoryProvider: FC<ChildrenProps> = (props) => {
  const { children } = props;
  // const [items, setItems] = useState<Array<Number>>([]);
  const [items, setItems] = useState<Array<QuestionNumber>>([]);
  // const [itemHistories, setItemHistories] = useState<Array<Array<Number>>>([]);
  const [itemHistories, setItemHistories] = useState<
    Array<Array<QuestionNumber>>
  >([]);
  return (
    <ItemHistoryContext.Provider
      value={{ items, setItems, itemHistories, setItemHistories }}
    >
      {children}
    </ItemHistoryContext.Provider>
  );
};
