import { Event } from "../core/event/Event";
import { ITimer } from "./ITimer";
import { OnFinishHandler } from "./OnFinishHandler";
import { OnTickHandler } from "./OnTickHandler";
import { UnregisterHandler } from "./UnregisterHandler";

export class Timer implements ITimer {
  private _remainingSeconds = 0;
  private _isPaused = false;
  private _isRunning = false;
  private finishEvent = new Event<OnFinishHandler>();
  private tickEvent = new Event<OnTickHandler>();

  get remainingSeconds(): number {
    return this._remainingSeconds;
  }
  get isPaused(): boolean {
    return this._isPaused;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  onFinish(handler: OnFinishHandler): UnregisterHandler {
    return this.finishEvent.onEvent(handler);
  }

  onTick(handler: OnTickHandler): UnregisterHandler {
    return this.tickEvent.onEvent(handler);
  }

  reset(): void {
    throw new Error("Method not implemented.");
  }

  start(): void {
    throw new Error("Method not implemented.");
  }

  stop(): void {
    throw new Error("Method not implemented.");
  }
}
