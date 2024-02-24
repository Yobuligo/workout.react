import { nextId } from "../../../../utils/nextId";
import { IWorkoutBlock } from "./IWorkoutBlock";
import { IWorkoutExercise } from "../IWorkoutExercise";

export abstract class WorkoutBlock implements IWorkoutBlock {
  exercises: IWorkoutExercise[] = [];
  id: string = nextId();
  abstract readonly name: string;
}
