import { Random } from "../../../../../core/Random";
import { repeat } from "../../../../../core/repeat";
import { ExerciseFinder } from "../../../../services/ExerciseFinder";
import { MuscleGroupRandomizer } from "../../../../services/MuscleGroupRandomizer";
import { RepetitionRandomizer } from "../../../../services/RepetitionRandomizer";
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
    const muscleGroupRandomizer = new MuscleGroupRandomizer(numberExercises);
    const exerciseFinder = new ExerciseFinder(this.exercisePool);
    repeat(numberExercises, () => {
      const muscleGroup = muscleGroupRandomizer.next();
      const exercise = exerciseFinder.findByMuscleGroup(
        muscleGroup,
        workoutConfig.devices
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
