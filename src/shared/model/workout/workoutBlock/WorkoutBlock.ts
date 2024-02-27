import { nextId } from "../../../../utils/nextId";
import { WorkoutSpanType } from "../../../types/WorkoutExerciseSpanType";
import { IWorkoutBlock } from "./IWorkoutBlock";
import { IWorkoutBlockItem } from "./IWorkoutBlockItem";

export abstract class WorkoutBlock implements IWorkoutBlock {
  items: IWorkoutBlockItem[] = [];
  readonly id: string = nextId();
  abstract readonly title: string;

  constructor(readonly type: WorkoutSpanType, readonly value: number) {}
}
