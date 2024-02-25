import { nextId } from "../../utils/nextId";
import { KettleBellDeadLift } from "../model/exercise/powerExercises/KettleBellDeadLift";
import { KettleBellGobletSquat } from "../model/exercise/powerExercises/KettleBellGobletSquat";
import { KettleBellSumoDeadLiftHighPull } from "../model/exercise/powerExercises/KettleBellSumoDeadLiftHighPull";
import { KettleBellSwing } from "../model/exercise/powerExercises/KettleBellSwing";
import { Pushup } from "../model/exercise/powerExercises/Pushup";
import { SitCrossLegged } from "../model/exercise/stretchingExercises/SitCrossLegged";
import { SitCrossLeggedWithSoleOfFoot } from "../model/exercise/stretchingExercises/SitCrossLeggedWithSoleOfFoot";
import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";
import { Workout } from "../model/workout/Workout";
import { Conditioning } from "../model/workout/workoutBlock/Conditioning";
import { Strength } from "../model/workout/workoutBlock/Strength";
import { Stretching } from "../model/workout/workoutBlock/Stretching";
import { WorkoutExercise } from "../model/workout/workoutExercise/WorkoutExercise";
import { WorkoutExerciseSpanType } from "../types/WorkoutExerciseSpanType";
import { SitCrossLeggedToTheSide } from "./../model/exercise/stretchingExercises/SitCrossLeggedToTheSide";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    // create workout
    const workout = new Workout();

    // create workout block for strength
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

    // create workout block for Conditioning
    const conditioning = new Conditioning();
    workout.blocks.push(conditioning);

    // create workout block for stretching
    const stretching = new Stretching();
    stretching.exercises.push({
      exercise: new SitCrossLegged(),
      id: nextId(),
      type: WorkoutExerciseSpanType.TIME_BASED,
      value: 90,
    });
    stretching.exercises.push({
      exercise: new SitCrossLeggedToTheSide(),
      id: nextId(),
      type: WorkoutExerciseSpanType.TIME_BASED,
      value: 90,
    });
    stretching.exercises.push({
      exercise: new SitCrossLeggedWithSoleOfFoot(),
      id: nextId(),
      type: WorkoutExerciseSpanType.TIME_BASED,
      value: 90,
    });
    workout.blocks.push(stretching);

    return workout;
  }
}
