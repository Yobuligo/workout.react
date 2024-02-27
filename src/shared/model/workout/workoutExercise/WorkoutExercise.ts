import { nextId } from "../../../../utils/nextId";
import { WorkoutSpanType } from "../../../types/WorkoutExerciseSpanType";
import { IExercise } from "../../exercise/IExercise";
import { IWorkoutExercise } from "./IWorkoutExercise";

export class WorkoutExercise implements IWorkoutExercise {
  readonly id: string = nextId();
  readonly title: string;

  constructor(
    readonly exercise: IExercise,
    readonly type: WorkoutSpanType,
    readonly value: number
  ) {
    this.title = exercise.title;
  }
}
