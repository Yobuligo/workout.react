import { style } from "../../../core/style";
import { Exercise } from "../exercise/Exercise";
import styles from "./ExerciseList.module.scss";
import { IExerciseListProps } from "./IExerciseListProps";

export const ExerciseList: React.FC<IExerciseListProps> = (props) => {
  const items = props.exercises.map((exercise, index) => (
    <div
      key={index}
      className={style(styles.item, index > 0 ? styles.divider : "")}
    >
      <Exercise exercise={exercise} />
    </div>
  ));

  return <>{items}</>;
};
