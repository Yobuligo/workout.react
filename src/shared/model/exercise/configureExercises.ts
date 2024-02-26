import { ExercisePool } from "./ExercisePool";

export const configureExercises = <TExercisePool extends ExercisePool>(
  pool: TExercisePool
): TExercisePool => {
  return pool;
};
