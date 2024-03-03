import { PowerExercises } from "../model/exercise/PowerExercises";
import { IWorkout } from "../model/workout/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/workout/IWorkoutConfig";
import { Workout } from "../model/workout/workout/Workout";
import { ConditioningWorkoutBlockGenerator } from "../model/workout/workoutBlock/ConditioningWorkoutBlockGenerator";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    // create workout
    const workout = new Workout();

    // Currently we always take the default PowerWorkoutScheme, with PowerBlock and ConditioningBlock

    // generate WorkoutBlock for Power

    // generate WorkoutBlock for Conditioning
    const conditioningWorkoutBlockGenerator =
      new ConditioningWorkoutBlockGenerator(PowerExercises);
    const conditioningBlock =
      conditioningWorkoutBlockGenerator.generate(workoutConfig);
    workout.blocks.push(conditioningBlock);

    return workout;
  }
}
