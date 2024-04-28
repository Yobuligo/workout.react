import { style } from "../../../core/style";
import useTranslation from "../../../hooks/useTranslation";
import { ExerciseInfo } from "../../../services/ExerciseInfo";
import { IExercise } from "../../../shared/model/exercise/IExercise";
import { Exercise } from "../exercise/Exercise";
import { ExerciseCount } from "../exerciseCount/ExerciseCount";
import styles from "./ExerciseList.module.scss";
import { IExerciseListProps } from "./IExerciseListProps";

export const ExerciseList: React.FC<IExerciseListProps> = (props) => {
  const { t } = useTranslation();
  const filterExercises = (): IExercise[] => {
    return props.exercises.filter((exercise) =>
      ExerciseInfo.hasDevices(exercise, props.devices)
    );
  };

  const items = filterExercises().map((exercise, index) => (
    <div key={index} className={style(styles.item)}>
      <Exercise exercise={exercise} />
    </div>
  ));

  return (
    <>
      <div className={styles.exerciseCount}>
        <ExerciseCount count={items.length} />
      </div>
      <div className={styles.exerciseList}>{items}</div>
    </>
  );
};
