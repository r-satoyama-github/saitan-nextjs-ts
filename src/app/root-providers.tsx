"use client";

import { FC, ReactNode } from "react";
import { CompleteProvider } from "~/providers/complete-provider";
import { CountProvider } from "~/providers/count-provider";
import { GameProvider } from "~/providers/game-provider";
import { ItemHistoryProvider } from "~/providers/item-history-provider";
import { LevelProvider } from "~/providers/level-provider";
import { SecondsProvider } from "~/providers/seconds-provider";

type Props = {
  children: ReactNode;
};
export const RootProviders: FC<Props> = (props) => {
  const { children } = props;
  return (
    <GameProvider>
      <LevelProvider>
        <CompleteProvider>
          <SecondsProvider>
            <CountProvider>
              <ItemHistoryProvider>{children}</ItemHistoryProvider>
            </CountProvider>
          </SecondsProvider>
        </CompleteProvider>
      </LevelProvider>
    </GameProvider>
  );
};
