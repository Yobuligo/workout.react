import { WorkoutSchemeType } from "./WorkoutSchemeType";

export const configureWorkoutScheme = <T extends WorkoutSchemeType>(
  config: T
): T => {
  return config;
};
