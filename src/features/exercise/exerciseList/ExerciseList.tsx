import { Exercise } from "../exercise/Exercise";
import { IExerciseListProps } from "./IExerciseListProps";

export const ExerciseList: React.FC<IExerciseListProps> = (props) => {
  const items = props.exercises.map((exercise, index) => (
    <div key={index}>
      <Exercise exercise={exercise} />
    </div>
  ));

  return <>{items}</>;
};
