import { ReactComponent as Pause } from "../../../assets/icons/pause.svg";
import { ReactComponent as Play } from "../../../assets/icons/play.svg";
import { ReactComponent as Reset } from "../../../assets/icons/reset.svg";
import { useInitialize } from "../../../hooks/useInitialize";
import { useTimer } from "../../../hooks/useTimer";
import { TimerPanelButton } from "../timerPanelButton/TimerPanelButton";
import { ITimerPanelProps } from "./ITimerPanelProps";
import styles from "./TimerPanel.module.scss";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const timer = useTimer(props.seconds);
  const width = "1.5rem";

  const onStart = () => {
    timer.onTick((seconds) => props.onTick?.(seconds));
    timer.onFinish(() => props.onFinish?.());
    timer.start();
  };

  useInitialize(() => {
    if (props.startImmediately) {
      onStart();
    }
  });

  const initialContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={() => onStart()}>
        <Play width={width} />
      </TimerPanelButton>
    </div>
  );

  const runningContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={timer.reset}>
        <Reset width={width} />
      </TimerPanelButton>
      <TimerPanelButton
        onClick={() => {
          timer.stop();
        }}
      >
        <Pause width={width} />
      </TimerPanelButton>
    </div>
  );

  const pauseContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={timer.reset}>
        <Reset width={width} />
      </TimerPanelButton>
      <TimerPanelButton onClick={() => onStart()}>
        <Play width={width} />
      </TimerPanelButton>
    </div>
  );

  return (
    <>
      {!timer.isStarted
        ? initialContent
        : timer.isRunning
        ? runningContent
        : pauseContent}
    </>
  );
};
