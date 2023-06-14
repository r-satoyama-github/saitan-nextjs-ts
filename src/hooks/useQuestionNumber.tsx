import { useEffect, useState } from "react";
import { __String } from "typescript";
import supabase from "~/lib/supabase";
import { Database } from "~/types/database.types";

const colors: Array<string> = [
  "#7ac70c",
  "#faa918",
  "#14d4f4",
  "#a560e8",
  "#e53838",
  "#31B9B0",
  "#559CEE",
  "#E2E745",
  "#F56452",
  "#EFCFEB",
  "#2C99E2",
  "#8153CF",
  "#00F998",
  "#F36823",
];

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];

type QuestionNumberWithColor = {
  questionNumber: QuestionNumber;
  color: string;
};
export const useQuestionNumber = (selectedLevel: string) => {
  console.log("useQuestionNumber Rendering");
  // const [questionNumbers, setQuestionNumbers] = useState<Array<QuestionNumber>>(
  //   []
  // );
  const [questionNumberWithColors, setQuestionNumberWithColors] = useState<
    Array<QuestionNumberWithColor>
  >([]);

  useEffect(() => {
    console.log("useQuestionNumber useEffect");
    fetchQuestionNumbers();
  }, []);

  const fetchQuestionNumbers = async () => {
    try {
      // const datas: any = await supabase.from("question_numbers").select("*");
      const datas: any = await supabase
        .from("question_numbers")
        .select("*")
        .eq("question_id", Number(selectedLevel));
      console.log("useQuestionNumber fetchQuestionNumbers", datas.data);
      const data: Array<QuestionNumberWithColor> = datas.data.map(
        (item: QuestionNumber, index: number) => {
          return {
            questionNumber: item,
            color: colors[index],
          };
        }
      );
      // setQuestionNumbers(datas.data);
      setQuestionNumberWithColors(data);
    } catch (error) {
      console.error(error);
    }
  };

  // return { questionNumbers, fetchQuestionNumbers };
  return { questionNumberWithColors, fetchQuestionNumbers };
};
