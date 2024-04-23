import { style } from "../../../core/style";
import { ExerciseInfo } from "../../../services/ExerciseInfo";
import { IExercise } from "../../../shared/model/exercise/IExercise";
import { Exercise } from "../exercise/Exercise";
import styles from "./ExerciseList.module.scss";
import { IExerciseListProps } from "./IExerciseListProps";

export const ExerciseList: React.FC<IExerciseListProps> = (props) => {
  const filterExercises = (): IExercise[] => {
    return props.exercises.filter((exercise) =>
      ExerciseInfo.hasDevices(exercise, props.devices)
    );
  };

  const items = filterExercises().map((exercise, index) => (
    <div
      key={index}
      className={style(styles.item, index > 0 ? styles.divider : "")}
    >
      <Exercise exercise={exercise} />
    </div>
  ));

  return <>{items}</>;
};
