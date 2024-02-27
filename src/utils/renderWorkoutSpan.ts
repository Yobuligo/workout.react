import { IWorkoutSpan } from "../shared/types/IWorkoutSpan";
import { WorkoutSpanType } from "../shared/types/WorkoutSpanType";

export const renderWorkoutSpan = (workoutSpan: IWorkoutSpan): string => {
  const unit =
    workoutSpan.type === WorkoutSpanType.REPETITION_BASED ? "x" : "sec";
  return `${workoutSpan.value}${unit}`;
};
