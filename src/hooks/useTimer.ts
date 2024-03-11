import { useMemo, useState } from "react";
import { Event } from "../core/event/Event";
import { ITimer } from "../types/ITimer";
import { OnFinishHandler } from "../types/OnFinishHandler";
import { OnTickHandler } from "../types/OnTickHandler";

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
  const finishEvent = useMemo(() => new Event<OnFinishHandler>(), []);
  const tickEvent = useMemo(() => new Event<OnTickHandler>(), []);

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

  const onFinishTimer = () => {
    setRemainingSeconds(0);
    timerState.isRunning = false;
    timerState.started = false;
    finishEvent.notify();
    return;
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

      if (remainingSeconds <= 0) {
        onFinishTimer();
        return;
      }

      tickEvent.notify(remainingSeconds);
      setRemainingSeconds(remainingSeconds);
      startTimer(endTime, timerState);
    }, 200);
  };

  const isPaused = timerState.started && !timerState.isRunning;

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
    onFinish: finishEvent.onEvent,
    onTick: tickEvent.onEvent,
    reset,
    start,
    stop,
  };
};