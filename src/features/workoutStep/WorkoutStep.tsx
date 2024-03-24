import { Fragment } from "react";
import useTranslation from "../../hooks/useTranslation";
import { IWorkoutStepProps } from "./IWorkoutStepProps";
import styles from "./WorkoutStep.module.scss";

export const WorkoutStep: React.FC<IWorkoutStepProps> = (props) => {
  const { t } = useTranslation();

  const items = props.workoutStep.workoutBlock.items.map(
    (workoutBlockItem, index) => (
      <Fragment key={index}>
        <div>{workoutBlockItem.value}</div>
        <div>{t(workoutBlockItem.title)}</div>
      </Fragment>
    )
  );

  return (
    <div>
      <h3>{t(props.workoutStep.workoutBlock.title)}</h3>
      <h3>
        {` Round ${props.workoutStep.workoutBlockIteration.from} of ${props.workoutStep.workoutBlockIteration.to}`}
      </h3>
      <div className={styles.workoutExercises}>{items}</div>
      {/* {t(props.workoutStep.workoutExercise.title)}
      {` (${props.workoutStep.workoutExercisePosition.from}/${props.workoutStep.workoutExercisePosition.to})`} */}
    </div>
  );
};
