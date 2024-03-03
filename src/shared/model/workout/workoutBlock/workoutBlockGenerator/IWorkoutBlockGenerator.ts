import { IWorkoutConfig } from "../../workout/IWorkoutConfig";
import { IWorkoutBlock } from "../IWorkoutBlock";

export interface IWorkoutBlockGenerator<T extends IWorkoutBlock> {
  generate(workoutConfig: IWorkoutConfig): T;
}
