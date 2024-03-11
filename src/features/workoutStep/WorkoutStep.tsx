import useTranslation from "../../hooks/useTranslation";
import { Timer } from "../timer/Timer";
import { IWorkoutStepProps } from "./IWorkoutStepProps";

export const WorkoutStep: React.FC<IWorkoutStepProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>
        {t(props.workoutStep.workoutBlock.title)}
        {` (${props.workoutStep.workoutBlockIteration.current}/${props.workoutStep.workoutBlockIteration.max})`}
      </h3>
      {t(props.workoutStep.workoutExercise.title)}
      <div>
        <Timer seconds={10} />
      </div>
    </div>
  );
};
