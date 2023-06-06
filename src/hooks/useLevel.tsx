import { useEffect, useState } from "react";
import supabase, { Question } from "~/lib/supabase";
import { Database } from "~/types/database.types";

type Level = Database["public"]["Tables"]["levels"]["Row"];

export const useLevel = () => {
  const [levels, setLevels] = useState<Array<Level>>([]);
  useEffect(() => {
    fetchLevels();
  }, []);

  const fetchLevels = async () => {
    try {
      const datas: any = await supabase.from("levels").select("*");
      console.log("Fetch Levels", datas.data);
      setLevels(datas.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { levels, fetchLevels };
};
