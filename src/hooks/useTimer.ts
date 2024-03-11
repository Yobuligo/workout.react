import { useMemo, useState } from "react";

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

export const useTimer = (seconds: number) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  let timerState: ITimerState = useMemo(
    () => ({ isRunning: false, started: false }),
    []
  );

  const onStartTimer = (endTime: Date) => {
    // Do not restart timer, if it is already running
    if (timerState.isRunning) {
      return;
    }
    timerState.isRunning = true;
    timerState.started = true;
    startTimer(endTime, timerState);
  };

  const startTimer = (endTime: Date, timerState: ITimerState) => {
    // Stop timer, if it was stopped from outside
    if (!timerState.isRunning) {
      return;
    }

    setTimeout(() => {
      const now = new Date();
      const remainingSeconds = Math.round(
        (endTime.getTime() - now.getTime()) / 1000
      );
      console.log(`Calculate Remaining seconds ${remainingSeconds}`);
      setRemainingSeconds(remainingSeconds);
      startTimer(endTime, timerState);
    }, 500);
  };

  const isPaused = () => timerState.started && !timerState.isRunning;

  const stop = () => {
    timerState.isRunning = false;
  };

  const reset = () => {
    timerState.isRunning = false;
    timerState.started = false;
    setRemainingSeconds(seconds);
  };

  const start = () => {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + remainingSeconds);
    onStartTimer(endTime);
  };

  return {
    remainingSeconds,
    isRunning: timerState.isRunning,
    isPaused,
    reset,
    start,
    stop,
  };
};
