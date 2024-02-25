import { ExerciseConfig } from "./ExerciseConfig";

export const configureExercises = <TExerciseConfig extends ExerciseConfig>(
  config: TExerciseConfig
): TExerciseConfig => {
  return config;
};
