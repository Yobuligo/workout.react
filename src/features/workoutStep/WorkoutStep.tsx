import { Footer } from "../../components/footer/Footer";
import useTranslation from "../../hooks/useTranslation";
import { WorkoutSpanType } from "../../shared/types/WorkoutSpanType";
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

      {props.workoutStep.workoutBlock.type === WorkoutSpanType.TIME_BASED && (
        <Footer>
          <TimerPanel
            seconds={props.workoutStep.workoutBlock.value}
            startImmediately={true}
          />
        </Footer>
      )}
    </div>
  );
};
