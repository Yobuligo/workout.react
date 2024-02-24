import { IWorkout } from "./IWorkout";
import { IWorkoutBlock } from "./IWorkoutBlock";

export class Workout implements IWorkout {
  blocks: IWorkoutBlock[] = [];
  createdAt: Date = new Date();
  id: string = "123";
}
