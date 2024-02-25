import { KettleBellDeadLift } from "../model/powerExercises/KettleBellDeadLift";
import { KettleBellGobletSquat } from "../model/powerExercises/KettleBellGobletSquat";
import { KettleBellSumoDeadLiftHighPull } from "../model/powerExercises/KettleBellSumoDeadLiftHighPull";
import { KettleBellSwing } from "../model/powerExercises/KettleBellSwing";
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
      new WorkoutExercise(
        new KettleBellGobletSquat(),
        WorkoutExerciseSpanType.REPETITION_BASED,
        15
      ),
      new WorkoutExercise(
        new KettleBellSumoDeadLiftHighPull(),
        WorkoutExerciseSpanType.REPETITION_BASED,
        20
      ),
      new WorkoutExercise(
        new KettleBellDeadLift(),
        WorkoutExerciseSpanType.REPETITION_BASED,
        25
      ),
      new WorkoutExercise(
        new KettleBellSwing(),
        WorkoutExerciseSpanType.REPETITION_BASED,
        30
      ),
    ];
    workout.blocks.push(strength);

    // create workout block
    const conditioning = new Conditioning();
    workout.blocks.push(conditioning);

    return workout;
  }
}
