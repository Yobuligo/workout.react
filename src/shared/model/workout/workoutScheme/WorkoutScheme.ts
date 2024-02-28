import { Constructor } from "../../../../core/Constructor";
import { Scheme } from "../../core/scheme/Scheme";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";

export type WorkoutScheme = Scheme<Scheme<Constructor<WorkoutBlock>>>;
