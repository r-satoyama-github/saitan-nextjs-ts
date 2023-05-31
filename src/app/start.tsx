"use client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "~/components/buttons/primary-button";
import { ColumnContainer } from "~/components/containers/column-container";
import useAuth from "~/components/hooks/useAuth";
import { CompleteContext } from "~/components/providers/complete-provider";
import { GameContext } from "~/components/providers/game-provider";
import { Heading1 } from "~/components/texts/heading1";

export const Start = () => {
  // GameContext
  const context = useContext(GameContext);
  const { user, setUser } = context;

  // CompleteContext
  const completeContext = useContext(CompleteContext);
  const { setIsComplete, setIsPlaying } = completeContext;

  // Auth Github
  const { signInWithGithub, error, session } = useAuth();

  // Use Router
  const router = useRouter();

  const onClickPrimary = () => {
    setUser("TEST USER");
    router.push("/game");
  };

  useEffect(() => {
    setIsComplete(false);
    setIsPlaying(true);
  }, []);

  if (session) router.push("/game");

  return (
    <>
      <SColumnContainer>
        <Heading1 style={{}}>SAITAN</Heading1>
        <SButtonColumnContainer>
          <PrimaryButton onClick={onClickPrimary}>
            ゲストではじめる
          </PrimaryButton>
          <PrimaryButton onClick={signInWithGithub}>
            サインインしてから
          </PrimaryButton>
          {error && <p>{error}</p>}
        </SButtonColumnContainer>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 100vh;
`;

const SButtonColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 20%;
`;
