import { useMemo, useState } from "react";
import { IWorkoutStep } from "../../shared/model/workout/workoutStep/IWorkoutStep";
import { IWorkoutIterator } from "../../shared/services/workoutIterator/IWorkoutIterator";
import { WorkoutIterator } from "../../shared/services/workoutIterator/WorkoutIterator";
import { WorkoutStep } from "../workoutStep/WorkoutStep";
import { IWorkoutProps } from "./IWorkoutProps";

export const Workout: React.FC<IWorkoutProps> = (props) => {
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
      {workoutStep && <WorkoutStep workoutStep={workoutStep} />}
    </>
  );
};
