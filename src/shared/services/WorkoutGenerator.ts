import { nextId } from "../../utils/nextId";
import { ExercisePool } from "../model/exercise/ExercisePool";
import { IExercise } from "../model/exercise/IExercise";
import { PowerExercises } from "../model/exercise/PowerExercises";
import { StretchingExercises } from "../model/exercise/StretchingExercises";
import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";
import { Workout } from "../model/workout/Workout";
import { Conditioning } from "../model/workout/workoutBlock/Conditioning";
import { Strength } from "../model/workout/workoutBlock/Strength";
import { Stretching } from "../model/workout/workoutBlock/Stretching";
import { IWorkoutExercise } from "../model/workout/workoutExercise/IWorkoutExercise";
import { WorkoutExerciseSpanType } from "../types/WorkoutExerciseSpanType";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    // create workout
    const workout = new Workout();

    // find workout scheme (e.g. power - conditioning, power - stretching)

    // create workout block for strength
    const strength = new Strength();
    strength.exercises = this.createPowerExercises(PowerExercises);
    workout.blocks.push(strength);

    // create workout block for Conditioning
    const conditioning = new Conditioning();
    workout.blocks.push(conditioning);

    // create workout block for stretching
    const stretching = new Stretching();
    stretching.exercises = this.createStretchingExercises(StretchingExercises);
    workout.blocks.push(stretching);

    return workout;
  }

  createStretchingExercises<TExerciseConfig extends ExercisePool>(
    config: TExerciseConfig
  ): IWorkoutExercise[] {
    const workoutExercises: IWorkoutExercise[] = [];
    this.findExercises(config).forEach((exercise) =>
      workoutExercises.push({
        exercise,
        id: nextId(),
        type: WorkoutExerciseSpanType.TIME_BASED,
        value: 90,
      })
    );
    return workoutExercises;
  }

  createPowerExercises<TExerciseConfig extends ExercisePool>(
    config: TExerciseConfig
  ): IWorkoutExercise[] {
    const workoutExercises: IWorkoutExercise[] = [];
    this.findExercises(config).forEach((exercise) =>
      workoutExercises.push({
        exercise,
        id: nextId(),
        type: WorkoutExerciseSpanType.REPETITION_BASED,
        value: 20,
      })
    );
    return workoutExercises;
  }

  findExercises<TExerciseConfig extends ExercisePool>(
    config: TExerciseConfig
  ): IExercise[] {
    const exercises: IExercise[] = [];
    for (const propName in config) {
      exercises.push(config[propName]);
    }
    return exercises;
  }
}
