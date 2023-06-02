import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const SecondsContext = createContext<SecondsContextType>({
  seconds: 0,
  setSeconds: (seconds) => {},
  countTimerStart: () => {},
  countTimerStop: () => {},
});

type SecondsContextType = {
  seconds: number;
  setSeconds: (seconds: number) => void;
  countTimerStart: () => void;
  countTimerStop: () => void;
};

type Props = {
  children: ReactNode;
};
export const SecondsProvider: FC<Props> = (props) => {
  const { children } = props;
  const [seconds, setSeconds] = useState<number>(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const countTimerStart = useCallback(() => {
    console.log("Count Start Called");
    if (intervalRef.current !== null) {
      return;
    }
    console.log("Count Start");
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, []);

  const countTimerStop = useCallback(() => {
    console.log("Count Stop Called");
    if (intervalRef.current === null) {
      return;
    }
    console.log("Count Stop");
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return (
    <SecondsContext.Provider
      value={{
        seconds,
        setSeconds,
        countTimerStart,
        countTimerStop,
      }}
    >
      {children}
    </SecondsContext.Provider>
  );
};
