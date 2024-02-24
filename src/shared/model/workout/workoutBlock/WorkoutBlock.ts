import { nextId } from "../../../../utils/nextId";
import { IWorkoutExercise } from "../workoutExercise/IWorkoutExercise";
import { IWorkoutBlock } from "./IWorkoutBlock";

export abstract class WorkoutBlock implements IWorkoutBlock {
  exercises: IWorkoutExercise[] = [];
  readonly id: string = nextId();
  abstract readonly title: string;
}
