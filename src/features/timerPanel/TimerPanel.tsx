import { useTimer } from "../../hooks/useTimer";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { TimerPanelButton } from "../timerPanelButton/TimerPanelButton";
import { ITimerPanelProps } from "./ITimerPanelProps";
import styles from "./TimerPanel.module.scss";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const { t } = useTranslation();
  const timer = useTimer(props.seconds);

  const initialContent = (
    <div className={styles.buttons}>
      <TimerPanelButton>{t(texts.timerPanel.start)}</TimerPanelButton>
    </div>
  );

  const runningContent = (
    <div className={styles.buttons}>
      <TimerPanelButton>{t(texts.timerPanel.reset)}</TimerPanelButton>
      <TimerPanelButton>{t(texts.timerPanel.pause)}</TimerPanelButton>
    </div>
  );

  const pauseContent = (
    <div className={styles.buttons}>
      <TimerPanelButton>{t(texts.timerPanel.reset)}</TimerPanelButton>
      <TimerPanelButton>{t(texts.timerPanel.continue)}</TimerPanelButton>
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
