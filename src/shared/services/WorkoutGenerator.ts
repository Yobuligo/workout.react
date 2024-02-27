import { PowerExercises } from "../model/exercise/PowerExercises";
import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";
import { Workout } from "../model/workout/Workout";
import { Strength } from "../model/workout/workoutBlock/Strength";
import { WorkoutExercise } from "../model/workout/workoutExercise/WorkoutExercise";
import { MuscleGroup } from "../types/MuscleGroup";
import { WorkoutExerciseSpanType } from "../types/WorkoutExerciseSpanType";
import { ExerciseFinder } from "./ExerciseFinder";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    const exerciseFinder = new ExerciseFinder(PowerExercises);

    // create workout
    const workout = new Workout();

    // find workout scheme (e.g. power - conditioning, power - stretching)
    // consider workout type

    // create workout block for strength
    const strength = new Strength();
    strength.items = [
      new WorkoutExercise(
        exerciseFinder.findByMuscleGroup(
          MuscleGroup.ARMS,
          workoutConfig.devices
        ),
        WorkoutExerciseSpanType.REPETITION_BASED,
        20
      ),
      new WorkoutExercise(
        exerciseFinder.findByMuscleGroup(
          MuscleGroup.CORE,
          workoutConfig.devices
        ),
        WorkoutExerciseSpanType.REPETITION_BASED,
        20
      ),
      new WorkoutExercise(
        exerciseFinder.findByMuscleGroup(
          MuscleGroup.LEGS,
          workoutConfig.devices
        ),
        WorkoutExerciseSpanType.REPETITION_BASED,
        20
      ),
    ];
    workout.blocks.push(strength);

    return workout;
  }
}
