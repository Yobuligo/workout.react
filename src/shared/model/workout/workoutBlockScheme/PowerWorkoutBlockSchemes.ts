import { MuscleGroup } from "../../../types/MuscleGroup";
import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { WorkoutBlockSchemes } from "./WorkoutBlockSchemes";

export const PowerWorkoutBlockSchemes: WorkoutBlockSchemes = {
  default: {
    workoutSpan: {
      type: WorkoutSpanType.REPETITION_BASED,
      value: 3,
    },
    muscleGroups: [MuscleGroup.LEGS, MuscleGroup.FULL_BODY, MuscleGroup.ARMS],
  },
};
