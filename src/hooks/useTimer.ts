import { useEffect, useMemo, useState } from "react";
import { ITimer } from "../core/services/timer/ITimer";
import { Timer } from "../core/services/timer/Timer";
import { VoidHandler } from "../core/types/VoidHandler";
import { OnRemainingSecondsChangeHandler } from "./../core/services/timer/OnRemainingSecondsChangeHandler";

export const useTimer = (seconds: number): ITimer => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const timer = useMemo(() => new Timer(seconds), [seconds]);
  const [, setState] = useState("");

  useEffect(() => {
    timer.onRemainingSecondsChange((remainingSeconds) =>
      setRemainingSeconds(remainingSeconds)
    );
    timer.onFinish(() => setState("finished"));
    timer.onReset(() => setState("reset"));
    timer.onStart(() => setState("start"));
    timer.onStop(() => setState("stop"));
    timer.onTick(() => setState("tick"));

    return () => {
      timer.destruct();
    };
  }, [timer]);

  const destruct = () => {
    timer.destruct();
  };

  const isRunning = timer.isRunning;

  const isPaused = timer.isPaused;

  const isStarted = timer.isStarted;

  const tickSize = timer.tickSize;

  const onFinish = (handler: VoidHandler) => timer.onFinish(handler);

  const onRemainingSecondsChange = (handler: OnRemainingSecondsChangeHandler) =>
    timer.onRemainingSecondsChange(handler);

  const onReset = (handler: VoidHandler) => timer.onReset(handler);

  const onStart = (handler: VoidHandler) => timer.onStart(handler);

  const onStop = (handler: VoidHandler) => timer.onStop(handler);

  const onTick = (handler: OnRemainingSecondsChangeHandler) =>
    timer.onTick(handler);

  const reset = () => timer.reset();

  const start = () => timer.start();

  const stop = () => timer.stop();

  return {
    isRunning,
    isPaused,
    isStarted,
    remainingSeconds,
    tickSize,
    destruct,
    onFinish,
    onRemainingSecondsChange,
    onReset,
    onStart,
    onStop,
    onTick,
    reset,
    start,
    stop,
  };
};
