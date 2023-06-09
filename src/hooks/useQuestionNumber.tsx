import { useEffect, useState } from "react";
import { __String } from "typescript";
import supabase from "~/lib/supabase";
import { Database } from "~/types/database.types";

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];

export const useQuestionNumber = (selectedLevel: string) => {
  console.log("useQuestionNumber Rendering");
  const [questionNumbers, setQuestionNumbers] = useState<Array<QuestionNumber>>(
    []
  );

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
      setQuestionNumbers(datas.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { questionNumbers, fetchQuestionNumbers };
};
