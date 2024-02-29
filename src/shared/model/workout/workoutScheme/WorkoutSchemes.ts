import { configureSchemes } from "../../core/scheme/configureSchemes";
import { PowerWorkoutBlockSchemes } from "../workoutBlockScheme/PowerWorkoutBlockSchemes";
import { WorkoutScheme } from "./WorkoutScheme";

export const WorkoutSchemes: WorkoutScheme = configureSchemes({
  default: {
    power: PowerWorkoutBlockSchemes,
    // conditioning: Conditioning,
  },
  full: {
    // power: Power,
    // conditioning: Conditioning,
    // stretching: Stretching,
  },
  stretching: {
    // stretching: Stretching,
  },
});
