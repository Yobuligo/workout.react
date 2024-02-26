import { Pool } from "../../../types/Pool";
import { IWorkoutType } from "../../exercise/IWorkoutType";

export const configureWorkoutTypes = <
  TWorkoutTypePool extends Pool<IWorkoutType>
>(
  pool: TWorkoutTypePool
): TWorkoutTypePool => {
  return pool;
};
