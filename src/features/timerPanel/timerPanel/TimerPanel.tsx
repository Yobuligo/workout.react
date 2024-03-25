import { ReactComponent as Pause } from "../../../assets/icons/pause.svg";
import { ReactComponent as Play } from "../../../assets/icons/play.svg";
import { ReactComponent as Reset } from "../../../assets/icons/reset.svg";
import { TimerPanelButton } from "../timerPanelButton/TimerPanelButton";
import { ITimerPanelProps } from "./ITimerPanelProps";
import styles from "./TimerPanel.module.scss";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const width = "1.5rem";

  const initialContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={props.timer.start}>
        <Play width={width} />
      </TimerPanelButton>
    </div>
  );

  const runningContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={props.timer.reset}>
        <Reset width={width} />
      </TimerPanelButton>
      <TimerPanelButton onClick={props.timer.stop}>
        <Pause width={width} />
      </TimerPanelButton>
    </div>
  );

  const pauseContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={props.timer.reset}>
        <Reset width={width} />
      </TimerPanelButton>
      <TimerPanelButton onClick={props.timer.start}>
        <Play width={width} />
      </TimerPanelButton>
    </div>
  );

  return (
    <>
      {!props.timer.isStarted
        ? initialContent
        : props.timer.isRunning
        ? runningContent
        : pauseContent}
    </>
  );
};
