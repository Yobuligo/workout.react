import { Event } from "../core/event/Event";
import { ITimer } from "./ITimer";
import { OnFinishHandler } from "./OnFinishHandler";
import { OnTickHandler } from "./OnTickHandler";
import { UnregisterHandler } from "./UnregisterHandler";

export class Timer implements ITimer {
  private _remainingSeconds: number;
  private _isPaused = false;
  private _isRunning = false;
  private _isStarted = false;
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
    this.pause();
  }

  onFinish(handler: OnFinishHandler): UnregisterHandler {
    return this.finishEvent.onEvent(handler);
  }

  onTick(handler: OnTickHandler): UnregisterHandler {
    return this.tickEvent.onEvent(handler);
  }

  pause(): void {
    if (!this.isRunning) {
      return;
    }
  }

  reset(): void {
    throw new Error("Method not implemented.");
  }

  start(): void {
    if (this.isRunning) {
      return;
    }
    const endTime = this.createEndTime();
    this.startTimer(endTime);
  }

  private startTimer(endTime: Date) {
    this._isRunning = true;
    this._isStarted = true;
  }

  private createEndTime(): Date {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + this.remainingSeconds);
    return endTime;
  }
}
