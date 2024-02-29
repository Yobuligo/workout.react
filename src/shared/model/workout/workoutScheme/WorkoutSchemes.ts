import { configureSchemes } from "../../core/scheme/configureSchemes";
import { PowerWorkoutBlockSchemes } from "../workoutBlockScheme/PowerWorkoutBlockSchemes";
import { StretchingWorkoutBlockSchemes } from "../workoutBlockScheme/StretchingWorkoutBlockSchemes";
import { ConditioningWorkoutBlockSchemes } from "./../workoutBlockScheme/ConditioningWorkoutBlockSchemes";
import { WorkoutScheme } from "./WorkoutScheme";

export const WorkoutSchemes: WorkoutScheme = configureSchemes({
  default: {
    power: PowerWorkoutBlockSchemes,
    conditioning: ConditioningWorkoutBlockSchemes,
  },
  full: {
    power: PowerWorkoutBlockSchemes,
    conditioning: ConditioningWorkoutBlockSchemes,
    stretching: StretchingWorkoutBlockSchemes,
  },
  stretching: {
    stretching: StretchingWorkoutBlockSchemes,
  },
});
