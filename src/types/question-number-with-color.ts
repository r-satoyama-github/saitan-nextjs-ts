import { Database } from "./database.types";

type QuestionNumber = Database["public"]["Tables"]["question_numbers"]["Row"];
export type QuestionNumberWithColor = {
  questionNumber: QuestionNumber;
  color: string;
};
