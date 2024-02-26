import useTranslation from "../../hooks/useTranslation";
import { WorkoutExerciseList } from "../workoutExerciseList/WorkoutExerciseList";
import { IWorkoutBlockProps } from "./IWorkoutBlockProps";
import styles from "./WorkoutBlock.module.scss";

export const WorkoutBlock: React.FC<IWorkoutBlockProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.workoutBlock}>
      <h3>{t(props.workoutBlock.title)}</h3>
      <div className={styles.workoutExerciseList}>
        <WorkoutExerciseList workoutExercises={props.workoutBlock.exercises} />
      </div>
    </div>
  );
};