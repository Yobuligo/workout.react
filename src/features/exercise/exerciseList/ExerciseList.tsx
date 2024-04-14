import { Card } from "../../../components/card/Card";
import { Exercise } from "../exercise/Exercise";
import styles from "./ExerciseList.module.scss";
import { IExerciseListProps } from "./IExerciseListProps";

export const ExerciseList: React.FC<IExerciseListProps> = (props) => {
  const items = props.exercises.map((exercise, index) => (
    <Card key={index} className={styles.item}>
      <Exercise exercise={exercise} />
    </Card>
  ));

  return <>{items}</>;
};
