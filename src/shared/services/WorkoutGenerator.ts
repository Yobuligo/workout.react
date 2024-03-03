import { PowerExercises } from "../model/exercise/PowerExercises";
import { IWorkout } from "../model/workout/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/workout/IWorkoutConfig";
import { Workout } from "../model/workout/workout/Workout";
import { PowerWorkoutBlock } from "../model/workout/workoutBlock/PowerWorkoutBlock";
import { WorkoutExercise } from "../model/workout/workoutExercise/WorkoutExercise";
import { PowerWorkoutSchemes } from "../model/workout/workoutScheme/PowerWorkoutSchemes";
import { MuscleGroup } from "../types/MuscleGroup";
import { WorkoutSpanType } from "../types/WorkoutSpanType";
import { ExerciseFinder } from "./ExerciseFinder";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    const exerciseFinder = new ExerciseFinder(PowerExercises);

    // create workout
    const workout = new Workout();

    // Currently we always take the default PowerWorkoutScheme, with PowerBlock and ConditioningBlock
    


    // generate WorkoutBlock for power and for Conditioning



    // create workout block for strength
    const strength = new PowerWorkoutBlock(WorkoutSpanType.TIME_BASED, 900);
    strength.items = [
      new WorkoutExercise(
        exerciseFinder.findByMuscleGroup(
          MuscleGroup.ARMS,
          workoutConfig.devices
        ),
        WorkoutSpanType.REPETITION_BASED,
        20
      ),
      new WorkoutExercise(
        exerciseFinder.findByMuscleGroup(
          MuscleGroup.CORE,
          workoutConfig.devices
        ),
        WorkoutSpanType.REPETITION_BASED,
        20
      ),
      new WorkoutExercise(
        exerciseFinder.findByMuscleGroup(
          MuscleGroup.LEGS,
          workoutConfig.devices
        ),
        WorkoutSpanType.REPETITION_BASED,
        20
      ),
    ];
    workout.blocks.push(strength);

    return workout;
  }
}
