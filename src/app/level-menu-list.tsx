import { GridContainer } from "~/components/containers/grid-container";
import { useQuestion } from "~/hooks/useQuestion";
import { LevelCard } from "./level-card";
import { Database } from "~/types/database.types";
import { FC, useEffect } from "react";

type Question = Database["public"]["Tables"]["questions"]["Row"];
// async function fetchQuestions() {
//   console.log("ENV FETCH", process.env.NEXT_PUBLIC_SUPABASE_URL!);
//   console.log("ENV FETCH", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/rest/v1/questions?select=*`,
//     {
//       headers: new Headers({
//         apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! as string,
//       }),
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data in server");
//   }
//   const questions: Question[] = await res.json();
//   return questions;
// }
type Props = {
  selectedLevel: number;
};
export const LevelMenuList: FC<Props> = (props) => {
  const { selectedLevel } = props;
  const { questions } = useQuestion(selectedLevel);
  console.log("LevelMenuList Rendering", selectedLevel);
  console.log("LevelMenuList Rendering", questions);

  // const questions = await fetchQuestions();
  // Hooks

  return (
    <GridContainer>
      {questions.map((item) => {
        return <LevelCard key={item.question_id}>{item.number}</LevelCard>;
      })}
    </GridContainer>
  );
};
