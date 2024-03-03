import { IllegalArgumentError } from "../../error/IllegalArgumentError";
import { MuscleGroup } from "../types/MuscleGroup";
import { RandomList } from "./randomList/RandomList";

export class MuscleGroupRandomizer {
  private randomList: RandomList = new RandomList(4);

  next(): MuscleGroup {
    const index = this.randomList.pick().index;
    switch (index) {
      case 0:
        return MuscleGroup.BACK;
      case 1:
        return MuscleGroup.CORE;
      case 2:
        return MuscleGroup.FULL_BODY;
      case 3:
        return MuscleGroup.LEGS;
      default:
        throw new IllegalArgumentError(
          `Error while picking next muscle group from ${MuscleGroupRandomizer.name}. This requested muscle group with index '${index}' is not supported.`
        );
    }
  }
}
