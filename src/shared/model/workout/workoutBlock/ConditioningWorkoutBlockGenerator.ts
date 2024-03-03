import { Random } from "../../../../core/Random";
import { repeat } from "../../../../core/repeat";
import { ExerciseFinder } from "../../../services/ExerciseFinder";
import { MuscleGroupRandomizer } from "../../../services/MuscleGroupRandomizer";
import { RepetitionRandomizer } from "../../../services/RepetitionRandomizer";
import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { IDevice } from "../../device/IDevice";
import { PowerExercises } from "../../exercise/PowerExercises";
import { IWorkoutExercise } from "../workoutExercise/IWorkoutExercise";
import { WorkoutExercise } from "../workoutExercise/WorkoutExercise";
import { ConditioningWorkoutBlock } from "./ConditioningWorkoutBlock";

export class ConditioningWorkoutBlockGenerator {
  generate(availableDevices: IDevice[]): ConditioningWorkoutBlock {
    const workoutBlock = new ConditioningWorkoutBlock(
      WorkoutSpanType.TIME_BASED,
      15
    );

    const workoutExercises = this.generateWorkoutExercises(availableDevices);
    workoutBlock.items.push(...workoutExercises);
    return workoutBlock;
  }

  private generateWorkoutExercises(
    availableDevices: IDevice[]
  ): IWorkoutExercise[] {
    const workoutExercises: IWorkoutExercise[] = [];
    const numberExercises = Random.next(5);
    const muscleGroupRandomizer = new MuscleGroupRandomizer(numberExercises);
    const exerciseFinder = new ExerciseFinder(PowerExercises);
    repeat(numberExercises, () => {
      const muscleGroup = muscleGroupRandomizer.next();
      const exercise = exerciseFinder.findByMuscleGroup(
        muscleGroup,
        availableDevices
      );
      const workoutExercise = new WorkoutExercise(
        exercise,
        WorkoutSpanType.REPETITION_BASED,
        RepetitionRandomizer.next()
      );
      workoutExercises.push(workoutExercise);
    });
    return workoutExercises;
  }
}
