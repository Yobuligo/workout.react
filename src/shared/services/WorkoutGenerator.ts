import { Random } from "../../core/Random";
import { repeat } from "../../core/repeat";
import { PowerExercises } from "../model/exercise/PowerExercises";
import { IWorkout } from "../model/workout/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/workout/IWorkoutConfig";
import { Workout } from "../model/workout/workout/Workout";
import { Power } from "../model/workout/workoutBlock/Power";
import { WorkoutExercise } from "../model/workout/workoutExercise/WorkoutExercise";
import { MuscleGroup } from "../types/MuscleGroup";
import { WorkoutSpanType } from "../types/WorkoutSpanType";
import { ExerciseFinder } from "./ExerciseFinder";
import { IWorkoutGenerator } from "./IWorkoutGenerator";
import { RandomList } from "./randomList/RandomList";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    const exerciseFinder = new ExerciseFinder(PowerExercises);

    // create workout
    const workout = new Workout();

    // find workout scheme (e.g. power - conditioning, power - stretching)
    // consider workout type

    // create workout block for strength

    const randomList = new RandomList(5)
    repeat(Random.next(5), ()=>{
      randomList.pick()
    })

    const strength = new Power(WorkoutSpanType.TIME_BASED, 900);
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
