import { Scheme } from "../../core/scheme/Scheme";
import { WorkoutBlockScheme } from "../workoutBlockScheme/WorkoutBlockScheme";

export type WorkoutScheme = Scheme<Scheme<WorkoutBlockScheme>>;
