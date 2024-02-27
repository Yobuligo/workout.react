import { NotSupportedError } from "../error/NotSupportedError";
import { WorkoutSpanType } from "../shared/types/WorkoutSpanType";
import { IWorkoutSpan } from "./../shared/types/IWorkoutSpan";
import { useRenderSeconds } from "./useRenderSeconds";
import { useRenderTimes } from "./useRenderTimes";

export const useRenderWorkoutSpan = () => {
  const renderSeconds = useRenderSeconds();
  const renderTimes = useRenderTimes();

  const render = (workoutSpan: IWorkoutSpan): string => {
    switch (workoutSpan.type) {
      case WorkoutSpanType.REPETITION_BASED:
        return renderTimes(workoutSpan.value);
      case WorkoutSpanType.TIME_BASED:
        return renderSeconds(workoutSpan.value);
      default:
        throw new NotSupportedError(
          `Error while rendering ${WorkoutSpanType}. ${WorkoutSpanType} ${workoutSpan.type} not supported.`
        );
    }
  };

  return render;
};
