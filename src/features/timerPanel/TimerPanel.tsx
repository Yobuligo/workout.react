import { useRenderSeconds } from "../../hooks/useRenderSeconds";
import { useTimer } from "../../hooks/useTimer";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { TimerPanelButton } from "../timerPanelButton/TimerPanelButton";
import { ITimerPanelProps } from "./ITimerPanelProps";
import styles from "./TimerPanel.module.scss";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const { t } = useTranslation();
  const renderSeconds = useRenderSeconds();
  const timer = useTimer(props.seconds);

  const initialContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={timer.start}>
        {t(texts.timerPanel.start)}
      </TimerPanelButton>
    </div>
  );

  const runningContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={timer.reset}>
        {t(texts.timerPanel.reset)}
      </TimerPanelButton>
      <TimerPanelButton
        onClick={() => {
          timer.stop();
        }}
      >
        {t(texts.timerPanel.pause)}
      </TimerPanelButton>
    </div>
  );

  const pauseContent = (
    <div className={styles.buttons}>
      <TimerPanelButton onClick={timer.reset}>
        {t(texts.timerPanel.reset)}
      </TimerPanelButton>
      <TimerPanelButton onClick={timer.start}>
        {t(texts.timerPanel.continue)}
      </TimerPanelButton>
    </div>
  );

  return (
    <div className={styles.timerPanel}>
      {renderSeconds(timer.remainingSeconds)}
      {!timer.isStarted
        ? initialContent
        : timer.isRunning
        ? runningContent
        : pauseContent}
    </div>
  );
};
