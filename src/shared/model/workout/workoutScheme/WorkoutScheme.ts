import { Scheme } from "../../core/scheme/Scheme";
import { WorkoutBlockSchemes } from "../workoutBlockScheme/WorkoutBlockSchemes";

export type WorkoutScheme = Scheme<Scheme<WorkoutBlockSchemes>>;
