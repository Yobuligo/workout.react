import { useInitialize } from "../../hooks/useInitialize";
import { useRenderSeconds } from "../../hooks/useRenderSeconds";
import { useTimer } from "../../hooks/useTimer";
import { ITimerProps } from "./ITimerProps";

export const Timer: React.FC<ITimerProps> = (props) => {
  const timer = useTimer(props.seconds);
  const renderSeconds = useRenderSeconds();

  useInitialize(() => {
    timer.start();
  });

  return <>{renderSeconds(timer.remainingSeconds)}</>;
};
