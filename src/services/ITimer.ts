import { OnFinishHandler } from "./OnFinishHandler";
import { OnTickHandler } from "./OnTickHandler";
import { UnregisterHandler } from "./UnregisterHandler";

export interface ITimer {
  /**
   * Returns the remaining seconds, until the timer end is reached.
   */
  readonly remainingSeconds: number;

  /**
   * Returns if the timer was started but is currently not running
   */
  readonly isPaused: boolean;

  /**
   * Returns true if the timer is running, otherwise false. Returns false if the timer was started and then stopped.
   */
  readonly isRunning: boolean;

  /**
   * Destructs the timer, which means to stop the timer and free memory
   */
  destruct(): void;

  /**
   * Register on event if timer has finished.
   */
  onFinish(handler: OnFinishHandler): UnregisterHandler;

  /**
   * Register on event timer tick
   */
  onTick(handler: OnTickHandler): UnregisterHandler;

  /**
   * Pauses the timer if it is currently running
   */
  pause(): void;

  /**
   * Stops the timer and resets it to its initial value.
   */
  reset(): void;

  /**
   * Starts the timer. Continues running, if it was stopped before.
   */
  start(): void;
}
