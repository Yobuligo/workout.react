import useTranslation from "../../hooks/useTranslation";
import { IWorkoutStepProps } from "./IWorkoutStepProps";

export const WorkoutStep: React.FC<IWorkoutStepProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      {props.workoutStep?.workoutBlock.title &&
        t(props.workoutStep.workoutBlock.title)}
    </div>
  );
};
