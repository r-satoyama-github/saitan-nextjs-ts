import { useEffect, useState } from "react";
import supabase, { Question } from "~/lib/supabase";

export const useMenu = () => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  useEffect(() => {
    fetchQuestions();
  }, []);
  const fetchQuestions = async () => {
    try {
      const datas: any = await supabase.from("questions").select("*");
      setQuestions(datas.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { questions, fetchQuestions };
};
