import { useMemo, useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import { IWorkoutIterator } from "../../shared/services/workoutIterator/IWorkoutIterator";
import { WorkoutIterator } from "../../shared/services/workoutIterator/WorkoutIterator";
import { IWorkoutStep } from "../../shared/model/workout/workoutStep/IWorkoutStep";
import { IWorkoutProps } from "./IWorkoutProps";

export const Workout: React.FC<IWorkoutProps> = (props) => {
  const { t } = useTranslation();
  const workoutIterator: IWorkoutIterator = useMemo(
    () => new WorkoutIterator(props.workout),
    [props.workout]
  );

  const [workoutStep, setWorkoutStep] = useState<IWorkoutStep | undefined>(
    undefined
  );

  return (
    <>
      <button
        onClick={() => {
          if (workoutIterator.hasNext) {
            const workoutStep = workoutIterator.next();
            setWorkoutStep(workoutStep);
          }
        }}
      >
        next
      </button>
      <div>
        {workoutStep?.workoutBlock.title && t(workoutStep.workoutBlock.title)}
      </div>
      <div>
        {workoutStep?.workoutExercise.title &&
          t(workoutStep.workoutExercise.title)}
      </div>
    </>
  );
};
