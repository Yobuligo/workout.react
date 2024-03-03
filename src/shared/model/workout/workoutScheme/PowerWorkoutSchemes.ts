import { configureSchemes } from "../../core/scheme/configureSchemes";
import { ConditioningWorkoutBlockSchemes } from "../workoutBlockScheme/ConditioningWorkoutBlockSchemes";
import { PowerWorkoutBlockSchemes } from "../workoutBlockScheme/PowerWorkoutBlockSchemes";
import { StretchingWorkoutBlockSchemes } from "../workoutBlockScheme/StretchingWorkoutBlockSchemes";

export const PowerWorkoutSchemes = configureSchemes({
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
