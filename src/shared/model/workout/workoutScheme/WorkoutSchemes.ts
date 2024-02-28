import { configureSchemes } from "../../core/scheme/configureSchemes";
import { Conditioning } from "../workoutBlock/Conditioning";
import { Power } from "../workoutBlock/Power";
import { Stretching } from "../workoutBlock/Stretching";
import { WorkoutScheme } from "./WorkoutScheme";

export const WorkoutSchemes: WorkoutScheme = configureSchemes({
  default: {
    power: Power,
    conditioning: Conditioning,
  },
  full: {
    power: Power,
    conditioning: Conditioning,
    stretching: Stretching,
  },
  stretching: {
    stretching: Stretching,
  },
});
