import { Random } from "../../../../../core/Random";
import { repeat } from "../../../../../core/repeat";
import { ExerciseFinder } from "../../../../services/exerciseFinder/ExerciseFinder";
import { ExerciseRepetitionRandomizer } from "../../../../services/ExerciseRepetitionRandomizer";
import { MuscleGroupRandomizer } from "../../../../services/MuscleGroupRandomizer";
import { WorkoutSpanType } from "../../../../types/WorkoutSpanType";
import { ExercisePool } from "../../../exercise/ExercisePool";
import { IWorkoutConfig } from "../../workout/IWorkoutConfig";
import { IWorkoutExercise } from "../../workoutExercise/IWorkoutExercise";
import { WorkoutExercise } from "../../workoutExercise/WorkoutExercise";
import { IWorkoutBlock } from "../IWorkoutBlock";
import { IWorkoutBlockGenerator } from "./IWorkoutBlockGenerator";

export abstract class WorkoutBlockGenerator<T extends IWorkoutBlock>
  implements IWorkoutBlockGenerator<T>
{
  constructor(
    private readonly exercisePool: ExercisePool,
    private readonly minNumberExercises: number,
    private readonly maxNumberExercises: number
  ) {}

  protected abstract createWorkoutBlock(): T;

  generate(workoutConfig: IWorkoutConfig): T {
    const workoutBlock = this.createWorkoutBlock();
    const workoutExercises = this.generateWorkoutExercises(workoutConfig);
    workoutBlock.items.push(...workoutExercises);
    return workoutBlock;
  }

  private generateWorkoutExercises(
    workoutConfig: IWorkoutConfig
  ): IWorkoutExercise[] {
    const workoutExercises: IWorkoutExercise[] = [];
    const numberExercises = Random.next(
      this.minNumberExercises,
      this.maxNumberExercises
    );
    const muscleGroupRandomizer = new MuscleGroupRandomizer();
    const exerciseFinder = new ExerciseFinder(this.exercisePool);
    repeat(numberExercises, () => {
      // If it is only 1 exercise, try as many repetitions as possible
      // otherwise the number is calculated
      const muscleGroup = muscleGroupRandomizer.next();
      const exercise = exerciseFinder.findByMuscleGroup(
        muscleGroup,
        workoutConfig.devices
      );

      const numberRepetitions =
        numberExercises === 1 ? 0 : ExerciseRepetitionRandomizer.next(exercise);
      const workoutExercise = new WorkoutExercise(
        exercise,
        WorkoutSpanType.REPETITION_BASED,
        numberRepetitions
      );
      workoutExercises.push(workoutExercise);
    });
    return workoutExercises;
  }
}
