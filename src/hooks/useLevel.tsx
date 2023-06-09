import { useEffect, useState } from "react";
import supabase, { Question } from "~/lib/supabase";
import { Database } from "~/types/database.types";
import { SelectLevelOption } from "~/types/select-level-option";

type Level = Database["public"]["Tables"]["levels"]["Row"];

export const useLevel = () => {
  const [levels, setLevels] = useState<Array<SelectLevelOption>>([]);
  useEffect(() => {
    fetchLevels();
  }, []);

  const fetchLevels = async () => {
    try {
      const datas: any = await supabase.from("levels").select("*");
      console.log("Fetch Levels", datas.data);
      const options: Array<SelectLevelOption> = [];
      datas.data.map((level: Level) => {
        options.push({ lv: level, value: level.volume, label: level.name });
      });
      setLevels(datas.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { levels, fetchLevels };
};
