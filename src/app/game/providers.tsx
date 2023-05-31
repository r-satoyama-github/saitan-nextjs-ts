import { CountStatusProvider } from "~/components/providers/count-status-provider";

export function Providers({ children }) {
  return <CountStatusProvider>{children}</CountStatusProvider>;
}
