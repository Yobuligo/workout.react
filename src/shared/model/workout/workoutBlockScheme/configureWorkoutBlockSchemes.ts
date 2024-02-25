import { WorkoutBlockSchemesType } from "./WorkoutBlockSchemesType";

export const configureWorkoutBlockSchemes = <T extends WorkoutBlockSchemesType>(
  config: T
): T => {
  return config;
};
