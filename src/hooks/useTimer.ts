import { useState } from "react";

export const useTimer = (seconds: number) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const startTimer = (endTime: Date) => {
    setTimeout(() => {
      if (endTime) {
        const now = new Date();
        const remainingSeconds = Math.round(
          (endTime.getTime() - now.getTime()) / 1000
        );
        setRemainingSeconds(remainingSeconds);
        console.log(`Remaining time was calculated ${remainingSeconds}`);
        startTimer(endTime);
      }
    }, 500);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedSeconds(0);
  };

  const start = () => {
    setIsRunning(true);
    const remainingSeconds = seconds - elapsedSeconds;
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + remainingSeconds);
    startTimer(endTime);
  };

  const stop = () => {
    setIsRunning(false);
  };

  return {
    remainingSeconds,
    reset,
    start,
    stop,
  };
};
