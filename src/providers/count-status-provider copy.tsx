// import {
//   FC,
//   ReactNode,
//   createContext,
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { Number } from "~/types/number";

// export const CountStatusContext = createContext<CountStatusContextType>({
//   count: 0,
//   setCount: (count) => {},
//   seconds: 0,
//   setSeconds: (seconds) => {},
//   // itemHistories: [],
//   // setItemHistories: (itemHistroies) => {},
//   start: () => {},
//   stop: () => {},
// });

// type CountStatusContextType = {
//   count: number;
//   setCount: (count: number) => void;
//   seconds: number;
//   setSeconds: (seconds: number) => void;
//   // itemHistories: Array<Array<Number>>;
//   // setItemHistories: (itemHistroies: Array<Array<Number>>) => void;
//   start: () => void;
//   stop: () => void;
// };

// type Props = {
//   children: ReactNode;
// };
// export const CountStatusProvider: FC<Props> = (props) => {
//   const { children } = props;
//   const [count, setCount] = useState<number>(0);
//   const [seconds, setSeconds] = useState<number>(0);
//   // const [itemHistories, setItemHistories] = useState<Array<Array<Number>>>([]);

//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const start = useCallback(() => {
//     console.log("Count Start Called");
//     if (intervalRef.current !== null) {
//       return;
//     }
//     console.log("Count Start");
//     intervalRef.current = setInterval(() => {
//       setSeconds((s) => s + 1);
//     }, 1000);
//   }, []);

//   const stop = useCallback(() => {
//     console.log("Count Stop Called");
//     if (intervalRef.current === null) {
//       return;
//     }
//     console.log("Count Stop");
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   }, []);

//   return (
//     <CountStatusContext.Provider
//       value={{
//         count,
//         setCount,
//         seconds,
//         setSeconds,
//         // itemHistories,
//         // setItemHistories,
//         start,
//         stop,
//       }}
//     >
//       {children}
//     </CountStatusContext.Provider>
//   );
// };
