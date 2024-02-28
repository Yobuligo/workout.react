import { MuscleGroup } from "../../../types/MuscleGroup";
import { Scheme } from "../../core/scheme/Scheme";

export type WorkoutBlockScheme = Scheme<Scheme<MuscleGroup>>;
