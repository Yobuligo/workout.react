import { MuscleGroup } from "../../../types/MuscleGroup";
import { configureSchemes } from "../../core/scheme/configureSchemes";
import { WorkoutBlockScheme } from "./WorkoutBlockScheme";

export const PowerWorkoutBlockSchemes: WorkoutBlockScheme = configureSchemes({
  default: {
    arms: MuscleGroup.ARMS,
    core: MuscleGroup.CORE,
    legs: MuscleGroup.LEGS,
  },
  legs: {
    legs1: MuscleGroup.LEGS,
    legs2: MuscleGroup.LEGS,
    legs3: MuscleGroup.LEGS,
  },
});
