import { Random } from "../../core/services/Random";
import { IllegalArgumentError } from "../../core/errors/IllegalArgumentError";
import { IExercise } from "../model/exercise/IExercise";
import { Difficulty } from "../types/Difficulty";

export class ExerciseRepetitionRandomizer {
  static next(exercise: IExercise): number {
    switch (exercise.difficulty) {
      case Difficulty.EASY:
        return this.nextForEasy();
      case Difficulty.MEDIUM:
        return this.nextForMedium();
      case Difficulty.HARD:
        return this.nextForHard();
      default:
        throw new IllegalArgumentError(
          `Error while generating random repetition number by difficulty. Difficulty is not supported.`
        );
    }
  }

  private static nextForEasy(): number {
    switch (Random.next(3)) {
      case 1:
        return 25;
      case 2:
        return 30;
      case 3:
        return 35;
      default:
        this.throwIllegalRandomValue();
    }
  }

  private static nextForMedium(): number {
    switch (Random.next(3)) {
      case 1:
        return 20;
      case 2:
        return 25;
      case 3:
        return 30;
      default:
        this.throwIllegalRandomValue();
    }
  }

  private static nextForHard(): number {
    switch (Random.next(3)) {
      case 1:
        return 15;
      case 2:
        return 20;
      case 3:
        return 25;
      default:
        this.throwIllegalRandomValue();
    }
  }

  private static throwIllegalRandomValue(): never {
    throw new IllegalArgumentError(
      `Error while generating random repetition number. Generated random number is not supported.`
    );
  }
}
