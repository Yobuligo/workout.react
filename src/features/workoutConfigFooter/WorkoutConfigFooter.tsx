import { Card } from "../../components/card/Card";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IWorkoutConfigFooterProps } from "./IWorkoutConfigFooterProps";
import styles from "./WorkoutConfigFooter.module.scss";

export const WorkoutConfigFooter: React.FC<IWorkoutConfigFooterProps> = (
  props
) => {
  const { t } = useTranslation();
  const onGenerateWorkout = () => {};

  return (
    <div className={styles.workoutConfigFooter}>
      <Card className={styles.generateCard} onClick={onGenerateWorkout}>
        <h4>{t(texts.workoutConfigPage.captionGenerateWorkout)}</h4>
      </Card>
    </div>
  );
};
