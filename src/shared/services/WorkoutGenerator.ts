import { Pushup } from "../model/powerExercises/Pushup";
import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";
import { Workout } from "../model/workout/Workout";
import { Conditioning } from "../model/workout/workoutBlock/Conditioning";
import { Strength } from "../model/workout/workoutBlock/Strength";
import { WorkoutExercise } from "../model/workout/workoutExercise/WorkoutExercise";
import { WorkoutExerciseSpanType } from "../types/WorkoutExerciseSpanType";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    // Requirements
    // 1. Would be like to generate several workout blocks? E.g. power and conditional
    // 2. Whenever getter Exercises, consider the devices, which can be used
    // 3. Consider all muscle groups

    // create workout
    const workout = new Workout();

    // create workout block
    const strength = new Strength();
    strength.exercises = [
      new WorkoutExercise(
        new Pushup(),
        WorkoutExerciseSpanType.REPETITION_BASED,
        20
      ),
    ];
    workout.blocks.push(strength);

    // create workout block
    const conditioning = new Conditioning();
    workout.blocks.push(conditioning);

    return workout;
  }
}
