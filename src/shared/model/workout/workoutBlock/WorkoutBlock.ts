import { nextId } from "../../../../utils/nextId";
import { IWorkoutBlock } from "./IWorkoutBlock";
import { IWorkoutBlockItem } from "./IWorkoutBlockItem";

export abstract class WorkoutBlock implements IWorkoutBlock {
  items: IWorkoutBlockItem[] = [];
  readonly id: string = nextId();
  abstract readonly title: string;
}
