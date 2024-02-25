import useTranslation from "../../hooks/useTranslation";
import { WorkoutExerciseSpanType } from "../../shared/types/WorkoutExerciseSpanType";
import { IWorkoutExerciseListProps } from "./IWorkoutExerciseListProps";
import styles from "./WorkoutExerciseList.module.scss";

export const WorkoutExerciseList: React.FC<IWorkoutExerciseListProps> = (
  props
) => {
  const { t } = useTranslation();

  const items = props.workoutExercises.map((workoutExercise) => (
    <div key={workoutExercise.id}>
      {t(workoutExercise.exercise.title)} ({workoutExercise.value}
      {workoutExercise.type === WorkoutExerciseSpanType.REPETITION_BASED
        ? "x"
        : "sec"}
      )
    </div>
  ));

  return <div className={styles.workoutExerciseList}>{items}</div>;
};
