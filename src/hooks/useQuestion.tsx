import { useEffect, useState } from "react";
import supabase, { Question } from "~/lib/supabase";
import { Database } from "~/types/database.types";

type Level = Database["public"]["Tables"]["levels"]["Row"];

export const useQuestion = (selectedLevel: number) => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  useEffect(() => {
    fetchQuestions();
  }, [selectedLevel]);

  const fetchQuestions = async () => {
    try {
      const datas: any = await supabase
        .from("questions")
        .select("*")
        .eq("level_id", selectedLevel);
      setQuestions(datas.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { questions, fetchQuestions };
};
