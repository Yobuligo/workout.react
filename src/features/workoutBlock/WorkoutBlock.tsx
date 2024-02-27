import useTranslation from "../../hooks/useTranslation";
import { IWorkoutExercise } from "../../shared/model/workout/workoutExercise/IWorkoutExercise";
import { renderWorkoutSpan } from "../../utils/renderWorkoutSpan";
import { WorkoutExerciseList } from "../workoutExerciseList/WorkoutExerciseList";
import { IWorkoutBlockProps } from "./IWorkoutBlockProps";
import styles from "./WorkoutBlock.module.scss";

export const WorkoutBlock: React.FC<IWorkoutBlockProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.workoutBlock}>
      <h3>
        {t(props.workoutBlock.title)} ({renderWorkoutSpan(props.workoutBlock)})
      </h3>
      <div className={styles.workoutExerciseList}>
        <WorkoutExerciseList
          workoutExercises={props.workoutBlock.items as IWorkoutExercise[]}
        />
      </div>
    </div>
  );
};
