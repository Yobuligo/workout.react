import { MuscleGroup } from "../../../types/MuscleGroup";
import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { WorkoutBlockSchemes } from "./WorkoutBlockSchemes";

export const ConditioningWorkoutBlockSchemes: WorkoutBlockSchemes = {
  arms: {
    workoutSpan: {
      type: WorkoutSpanType.TIME_BASED,
      value: 0,
    },
    muscleGroups: [MuscleGroup.ARMS],
  },
  back: {
    workoutSpan: {
      type: WorkoutSpanType.TIME_BASED,
      value: 0,
    },
    muscleGroups: [MuscleGroup.BACK],
  },
  fullBody: {
    workoutSpan: {
      type: WorkoutSpanType.TIME_BASED,
      value: 0,
    },
    muscleGroups: [MuscleGroup.BACK],
  },
  fullBodyBack: {
    workoutSpan: {
      type: WorkoutSpanType.TIME_BASED,
      value: 15,
    },
    muscleGroups: [MuscleGroup.FULL_BODY, MuscleGroup.BACK],
  },
  fullBodyLegs: {
    workoutSpan: {
      type: WorkoutSpanType.TIME_BASED,
      value: 15,
    },
    muscleGroups: [MuscleGroup.FULL_BODY, MuscleGroup.LEGS],
  },
  fullBodyCore: {
    workoutSpan: {
      type: WorkoutSpanType.TIME_BASED,
      value: 15,
    },
    muscleGroups: [MuscleGroup.FULL_BODY, MuscleGroup.CORE],
  },
};
