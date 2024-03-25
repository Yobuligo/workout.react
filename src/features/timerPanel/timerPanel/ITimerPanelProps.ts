export interface ITimerPanelProps {
  seconds: number;
  startImmediately?: boolean;
  onFinish?: () => void;
  onReset?: ()=>void
  onTick?: (seconds: number) => void;
}
