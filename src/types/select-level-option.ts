import { Database } from "./database.types";

type Level = Database["public"]["Tables"]["levels"]["Row"];
export type SelectLevelOption = {
  lv: Level;
  value: number;
  label: string;
};
