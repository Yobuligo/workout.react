import { nextId } from "../../../../utils/nextId";
import { WorkoutExerciseSpanType } from "../../../types/WorkoutExerciseSpanType";
import { IExercise } from "../../exercise/IExercise";
import { IWorkoutExercise } from "./IWorkoutExercise";

export class WorkoutExercise implements IWorkoutExercise {
  readonly id: string = nextId();

  constructor(
    readonly exercise: IExercise,
    readonly type: WorkoutExerciseSpanType,
    readonly value: number
  ) {}
}
