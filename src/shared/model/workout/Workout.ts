import { nextId } from "../../../utils/nextId";
import { IWorkout } from "./IWorkout";
import { IWorkoutBlock } from "./workoutBlock/IWorkoutBlock";

export class Workout implements IWorkout {
  blocks: IWorkoutBlock[] = [];
  createdAt: Date = new Date();
  id: string = nextId();
}
