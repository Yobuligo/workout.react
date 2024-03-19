import { useEffect, useMemo, useState } from "react";
import { ITimer } from "../services/ITimer";
import { Timer } from "./../services/Timer";

interface ITimerState {
  /**
   * Returns if the timer is currently running
   */
  isRunning: boolean;

  /**
   * Returns if the timer was already started. Even so it is currently paused, it was started before.
   */
  started: boolean;
}

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
    timer.onTick((remainingSeconds) => setRemainingSeconds(remainingSeconds));
  };

  return {
    remainingSeconds,
    isRunning: timer.isRunning,
    isPaused: timer.isPaused,
    tickSize: timer.tickSize,
    destruct: timer.destruct,
    onFinish: timer.onFinish,
    onTick: timer.onTick,
    reset: timer.reset,
    start,
    stop: timer.stop,
  };
};
