import { Event } from "../core/event/Event";
import { ITimer } from "./ITimer";
import { OnFinishHandler } from "./OnFinishHandler";
import { OnTickHandler } from "./OnTickHandler";
import { UnregisterHandler } from "./UnregisterHandler";

export class Timer implements ITimer {
  private _remainingSeconds: number;
  private _isPaused = false;
  private _isRunning = false;
  private finishEvent = new Event<OnFinishHandler>();
  private tickEvent = new Event<OnTickHandler>();

  constructor(private readonly seconds: number) {
    this._remainingSeconds = seconds;
  }

  get remainingSeconds(): number {
    return this._remainingSeconds;
  }

  get isPaused(): boolean {
    return this._isPaused;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  destruct(): void {
    this.stop();
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
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + this.remainingSeconds);
    this.onStartTimer(endTime);
  }

  stop(): void {
    throw new Error("Method not implemented.");
  }

  private onStartTimer(endTime: Date){
    // Do not restart timer, if it is already running
    if (this.isRunning) {
      return;
    }

    this._isRunning = true;
    timerState.started = true;
    startTimer(endTime, timerState);    
  }
}
