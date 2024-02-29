import { IWorkoutSpan } from "../../../types/IWorkoutSpan";
import { MuscleGroup } from "../../../types/MuscleGroup";

export type WorkoutBlockScheme = {
  workoutSpan: IWorkoutSpan;
  muscleGroups: MuscleGroup[];
};
