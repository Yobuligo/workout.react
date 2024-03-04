import { IWorkoutExercise } from "./IWorkoutExercise";

export const isWorkoutExercise = (value: any): value is IWorkoutExercise => {
  return (
    "exercise" in value &&
    "id" in value &&
    "title" in value &&
    "type" in value &&
    "value" in value
  );
};
