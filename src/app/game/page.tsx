"use client";

import { useContext } from "react";
import LogoutButton from "~/components/buttons/logout-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/hooks/useAuth";
import { CompleteContext } from "~/providers/complete-provider";
import { Result } from "./result";
import { PlayField } from "./play-field";

export default function Page() {
  console.log("Game Page Rendering");
  // Contextの取得
  const completeContext = useContext(CompleteContext);

  // Contextから関数の取得
  const { isComplete, isPlaying } = completeContext;

  // const { session } = useAuth();

  return (
    <>
      <ColumnContainer>
        <div style={{ height: "5vh" }}></div>

        {/* {session && <LogoutButton />} */}
        {isComplete && !isPlaying ? <Result /> : <PlayField />}
      </ColumnContainer>
    </>
  );
}
