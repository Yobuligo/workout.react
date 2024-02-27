import { configureSchemes } from "../../scheme/configureSchemes";
import { Conditioning } from "../workoutBlock/Conditioning";
import { Strength } from "../workoutBlock/Strength";


continue here
export const WorkoutSchemes = configureSchemes({
  default: {
    strength: Strength,
    conditioning: Conditioning,
  },
});
