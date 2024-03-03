import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { ExercisePool } from "./../../exercise/ExercisePool";
import { PowerWorkoutBlock } from "./PowerWorkoutBlock";
import { WorkoutBlockGenerator } from "./workoutBlockGenerator/WorkoutBlockGenerator";

export class PowerWorkoutBlockGenerator extends WorkoutBlockGenerator<PowerWorkoutBlock> {
  constructor(exercisePool: ExercisePool) {
    super(exercisePool, 3, 4);
  }

  protected createWorkoutBlock(): PowerWorkoutBlock {
    return new PowerWorkoutBlock(WorkoutSpanType.REPETITION_BASED, 3);
  }
}
