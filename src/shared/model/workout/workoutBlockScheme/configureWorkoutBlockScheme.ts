import { WorkoutBlockSchemeType } from "./WorkoutBlockSchemeType";

export const configureWorkoutBlockScheme = <T extends WorkoutBlockSchemeType>(
  config: T
): T => {
  return config;
};
