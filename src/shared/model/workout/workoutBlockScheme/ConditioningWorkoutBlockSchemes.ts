import { configureSchemes } from "../../core/scheme/configureSchemes";
import { MuscleGroup } from "./../../../types/MuscleGroup";
import { WorkoutBlockScheme } from "./WorkoutBlockScheme";

export const ConditioningWorkoutBlockSchemes: WorkoutBlockScheme =
  configureSchemes({
    default: {
      legs: MuscleGroup.LEGS,
      arms: MuscleGroup.ARMS,
      legs2: MuscleGroup.LEGS,
      core: MuscleGroup.CORE,
    },
    second: {
      legs: MuscleGroup.LEGS,
      legs2: MuscleGroup.LEGS,
      core: MuscleGroup.CORE,
    },
    third: {
        
    }
  });
