"use client";

import { FC, ReactNode } from "react";
import { CompleteProvider } from "~/providers/complete-provider";
import { CountStatusProvider } from "~/providers/count-status-provider";
import { GameProvider } from "~/providers/game-provider";

type Props = {
  children: ReactNode;
};
export const RootProviders: FC<Props> = (props) => {
  const { children } = props;
  return (
    <GameProvider>
      <CompleteProvider>
        <CountStatusProvider>{children}</CountStatusProvider>
      </CompleteProvider>
    </GameProvider>
  );
};
