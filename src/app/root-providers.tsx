"use client";

import { CompleteProvider } from "~/components/providers/complete-provider";
import { CountStatusProvider } from "~/components/providers/count-status-provider";
import { GameProvider } from "~/components/providers/game-provider";

export function RootProviders({ children }) {
  return (
    <GameProvider>
      <CompleteProvider>
        <CountStatusProvider>{children}</CountStatusProvider>
      </CompleteProvider>
    </GameProvider>
  );
}
