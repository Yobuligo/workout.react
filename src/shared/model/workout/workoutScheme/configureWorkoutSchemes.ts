import { WorkoutSchemesType } from "./WorkoutSchemesType";

export const configureWorkoutSchemes = <T extends WorkoutSchemesType>(
  config: T
): T => {
  return config;
};
