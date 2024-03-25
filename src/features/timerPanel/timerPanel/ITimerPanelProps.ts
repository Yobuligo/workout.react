export interface ITimerPanelProps {
  seconds: number;
  startImmediately?: boolean;
  onTick?: (seconds: number) => void;
  onFinish?: () => void;
}
