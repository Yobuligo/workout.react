import { Card } from "../../components/card/Card";
import { ITimerPanelButtonProps } from "./ITimerPanelButtonProps";
import styles from "./TimerPanelButton.module.scss";

export const TimerPanelButton: React.FC<ITimerPanelButtonProps> = (props) => {
  return (
    <Card className={styles.timerPanelButton} onClick={props.onClick}>
      <h4>{props.children}</h4>
    </Card>
  );
};
