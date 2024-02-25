import { MuscleGroup } from "../../../types/MuscleGroup";
import { configureWorkoutSchemes } from "./configureWorkoutSchemes";

export const WorkoutSchemes = configureWorkoutSchemes({
  default: {
    arms: MuscleGroup.ARMS,
    core: MuscleGroup.CORE,
    legs: MuscleGroup.LEGS,
  },
});
