import { Random } from "../../core/Random";
import { IllegalArgumentError } from "../../error/IllegalArgumentError";

export class RepetitionRandomizer {
  static next(): number {
    switch (Random.next(4)) {
      case 1:
        return 15;
      case 2:
        return 20;
      case 3:
        return 25;
      case 4:
        return 30;
      default:
        throw new IllegalArgumentError(
          `Error while generating repetition number by random. Random number is not supported`
        );
    }
  }
}
