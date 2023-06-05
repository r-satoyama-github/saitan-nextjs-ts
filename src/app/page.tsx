"use client";
import { useState } from "react";
import { Start } from "./start";
import { LevelMenu } from "./level-menu";

export default function Home() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  return (
    <>{isMenu ? <LevelMenu /> : <Start setIsMenu={setIsMenu} />}</>
    // <Start />
  );
}
