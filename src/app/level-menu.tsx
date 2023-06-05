import { useCallback, useContext, useState } from "react";
import { ColumnContainer } from "~/components/containers/column-container";
import Select from "react-select";
import { LevelContext } from "~/providers/level-provider";
import { useRouter } from "next/navigation";
import { GridContainer } from "~/components/containers/grid-container";
import { LevelCard } from "./level-card";
import { Heading2 } from "~/components/texts/heading2";
import { Heading1 } from "~/components/texts/heading1";
import { useMenu } from "~/hooks/useMenu";

type SelectOption = {
  value: string;
  label: string;
};
const options: Array<SelectOption> = [
  { value: "line", label: "AAAA" },
  { value: "bar", label: "BBBB" },
  { value: "pie", label: "CCC" },
];

export const LevelMenu = () => {
  // Contextの取得
  const levelContext = useContext(LevelContext);

  // Contextから変数の取得
  const { level, setLevel } = levelContext;

  // Hooks
  const router = useRouter();
  const { questions } = useMenu();

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const onChangeSelect = (value: SelectOption) => {
    value ? setSelectedValue(value) : null;
  };
  const onClickLevel = useCallback((item: number) => {
    router.replace("/game");
  }, []);

  const data: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {console.log("LevelMenu", questions)}
      <ColumnContainer>
        <Heading2 style={{ margin: "20px 0px" }}>
          レベルヲ　センタクスル
        </Heading2>
        {/* <Select
          options={options}
          defaultValue={selectedValue}
          onChange={(value) => onChangeSelect(value!!)}
        /> */}
        <GridContainer>
          {questions.map((item) => {
            return (
              <LevelCard
                key={item.question_id}
                onClick={() => onClickLevel(item.number)}
              >
                {item.number}
              </LevelCard>
            );
          })}
        </GridContainer>
      </ColumnContainer>
    </>
  );
};
