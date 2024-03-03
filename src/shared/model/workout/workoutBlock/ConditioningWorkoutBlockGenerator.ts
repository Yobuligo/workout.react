import { Random } from "../../../../core/Random";
import { repeat } from "../../../../core/repeat";
import { ExerciseFinder } from "../../../services/ExerciseFinder";
import { MuscleGroupRandomizer } from "../../../services/MuscleGroupRandomizer";
import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { PowerExercises } from "../../exercise/PowerExercises";
import { IWorkoutExercise } from "../workoutExercise/IWorkoutExercise";
import { WorkoutExercise } from "../workoutExercise/WorkoutExercise";
import { ConditioningWorkoutBlock } from "./ConditioningWorkoutBlock";

export class ConditioningWorkoutBlockGenerator {
  generate(): ConditioningWorkoutBlock {
    const workoutBlock = new ConditioningWorkoutBlock(
      WorkoutSpanType.TIME_BASED,
      15
    );

    const workoutExercises = this.generateWorkoutExercises();
    workoutBlock.items.push(...workoutExercises);
    return workoutBlock;
  }

  private generateWorkoutExercises(): IWorkoutExercise[] {
    const workoutExercises: IWorkoutExercise[] = [];
    const numberExercises = Random.next(5);
    const muscleGroupRandomizer = new MuscleGroupRandomizer(numberExercises);
    const exerciseFinder = new ExerciseFinder(PowerExercises);
    repeat(numberExercises, () => {
      const muscleGroup = muscleGroupRandomizer.next();
      const exercise = exerciseFinder.findByMuscleGroup(muscleGroup);
      const workoutExercise = new WorkoutExercise(
        exercise,
        WorkoutSpanType.REPETITION_BASED,
        123
      );
      workoutExercises.push(workoutExercise);
    });
    return workoutExercises;
  }
}
