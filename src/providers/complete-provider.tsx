import { FC, ReactNode, createContext, useState } from "react";

export const CompleteContext = createContext<CompleteContextType>({
  isComplete: false,
  setIsComplete: (isComplete) => {},
  isPlaying: true,
  setIsPlaying: (isPlaying) => {},
});

type Props = {
  children: ReactNode;
};

type CompleteContextType = {
  isComplete: boolean;
  setIsComplete: (isComplete: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
};
export const CompleteProvider: FC<Props> = (props) => {
  const { children } = props;
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <CompleteContext.Provider
      value={{ isComplete, setIsComplete, isPlaying, setIsPlaying }}
    >
      {children}
    </CompleteContext.Provider>
  );
};
