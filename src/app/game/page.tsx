"use client";

import { useContext } from "react";
import LogoutButton from "~/components/buttons/logout-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/components/hooks/useAuth";
import { CompleteContext } from "~/components/providers/complete-provider";
import { Result } from "./result";
import { PlayField } from "./play-field";

export default function Page() {
  console.log("Game Page Rendering");
  const completeContext = useContext(CompleteContext);
  const { isComplete, isPlaying } = completeContext;

  // const { session } = useAuth();

  console.log("Page IsComplete", isComplete);
  console.log("Page IsPlaying", isPlaying);
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
