import { configureSchemes } from "../../core/scheme/configureSchemes";
import { ConditioningWorkoutBlockSchemes } from "../workoutBlockScheme/ConditioningWorkoutBlockSchemes";
import { PowerWorkoutBlockSchemes } from "../workoutBlockScheme/PowerWorkoutBlockSchemes";
import { StretchingWorkoutBlockSchemes } from "../workoutBlockScheme/StretchingWorkoutBlockSchemes";
import { WorkoutScheme } from "./WorkoutScheme";

export const PowerWorkoutSchemes: WorkoutScheme = configureSchemes({
  default: {
    power: PowerWorkoutBlockSchemes,
    conditioning: ConditioningWorkoutBlockSchemes,
  },
  full: {
    power: PowerWorkoutBlockSchemes,
    conditioning: ConditioningWorkoutBlockSchemes,
    stretching: StretchingWorkoutBlockSchemes,
  },
});
