import useTranslation from "../../hooks/useTranslation";
import { Timer } from "../timer/Timer";
import { TimerPanel } from "../timerPanel/timerPanel/TimerPanel";
import { IWorkoutStepProps } from "./IWorkoutStepProps";

export const WorkoutStep: React.FC<IWorkoutStepProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>
        {t(props.workoutStep.workoutBlock.title)}
        {` (${props.workoutStep.workoutBlockIteration.from}/${props.workoutStep.workoutBlockIteration.to})`}
      </h3>
      {t(props.workoutStep.workoutExercise.title)}
      {` (${props.workoutStep.workoutExercisePosition.from}/${props.workoutStep.workoutExercisePosition.to})`}
      <div>
        <Timer seconds={10} />
      </div>
      <TimerPanel seconds={900} />
    </div>
  );
};
