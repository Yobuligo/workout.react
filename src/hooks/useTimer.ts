import { useEffect, useMemo, useState } from "react";
import { ITimer } from "../services/ITimer";
import { Timer } from "./../services/Timer";

export const useTimer = (seconds: number): ITimer => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const timer = useMemo(() => new Timer(seconds), [seconds]);

  useEffect(() => {
    return () => {
      timer.destruct();
    };
  }, [timer]);

  const start = () => {
    timer.start();
    timer.onRemainingSecondsChange((remainingSeconds) =>
      setRemainingSeconds(remainingSeconds)
    );
  };

  return {
    remainingSeconds,
    isRunning: timer.isRunning,
    isPaused: timer.isPaused,
    tickSize: timer.tickSize,
    destruct: timer.destruct,
    onRemainingSecondsChange: timer.onRemainingSecondsChange,
    onFinish: timer.onFinish,
    onTick: timer.onTick,
    reset: timer.reset,
    start,
    stop: timer.stop,
  };
};
