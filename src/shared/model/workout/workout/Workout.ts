import { nextId } from "../../../../utils/nextId";
import { IWorkoutBlock } from "../workoutBlock/IWorkoutBlock";
import { IWorkout } from "./IWorkout";

export class Workout implements IWorkout {
  blocks: IWorkoutBlock[] = [];
  createdAt: Date = new Date();
  id: string = nextId();
}
