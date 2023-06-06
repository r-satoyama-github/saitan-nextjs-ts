import { useCallback, useContext, useState } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import Select from "react-select";
import { LevelContext } from "~/providers/level-provider";
import { Heading2 } from "~/components/texts/heading2";
import { LevelMenuList } from "./level-menu-list";
import { useLevel } from "~/hooks/useLevel";

type SelectOption = {
  value: number;
  label: string;
};
const options: Array<SelectOption> = [
  { value: 3, label: "レベル3" },
  { value: 4, label: "レベル4" },
  { value: 5, label: "レベル5" },
];
// const options: Array<SelectOption> = [];

export const LevelMenu = () => {
  console.log("LevelMenu Rendering");
  // Contextの取得
  const levelContext = useContext(LevelContext);

  // Contextから変数の取得
  const { level, setLevel } = levelContext;

  // Hooks
  const { levels } = useLevel();

  console.log("LevelMenu Rendering Levels", levels);
  console.log("LevelMenu Rendering Options", options);

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const onChangeSelect = useCallback((option: SelectOption) => {
    console.log("Selected Changed", option);
    option ? setSelectedValue(option) : null;
  }, []);

  return (
    <>
      {console.log("LevelMenu Rendering Selected", selectedValue)}
      <ColumnContainer>
        <Heading2 style={{ margin: "20px 0px" }}>
          レベルヲ　センタクスル
        </Heading2>
        <Select
          options={options}
          defaultValue={selectedValue}
          // onChange={(option) => onChangeSelect(selectedValue)}
          onChange={(option) => onChangeSelect(option!!)}
        />

        <LevelMenuList selectedLevel={selectedValue.value} />
      </ColumnContainer>
    </>
  );
};
