import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { ExercisePool } from "./../../exercise/ExercisePool";
import { ConditioningWorkoutBlock } from "./ConditioningWorkoutBlock";
import { WorkoutBlockGenerator } from "./workoutBlockGenerator/WorkoutBlockGenerator";

export class ConditioningWorkoutBlockGenerator extends WorkoutBlockGenerator<ConditioningWorkoutBlock> {
  constructor(exercisePool: ExercisePool) {
    super(exercisePool, 1, 5);
  }

  createWorkoutBlock(): ConditioningWorkoutBlock {
    return new ConditioningWorkoutBlock(WorkoutSpanType.TIME_BASED, 15);
  }
}
