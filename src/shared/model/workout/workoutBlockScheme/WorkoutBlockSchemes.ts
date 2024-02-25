import { MuscleGroup } from "../../../types/MuscleGroup";
import { configureWorkoutBlockSchemes } from "./configureWorkoutBlockSchemes";

export const WorkoutBlockSchemes = configureWorkoutBlockSchemes({
  default: {
    arms: MuscleGroup.ARMS,
    core: MuscleGroup.CORE,
    legs: MuscleGroup.LEGS,
  },
});
