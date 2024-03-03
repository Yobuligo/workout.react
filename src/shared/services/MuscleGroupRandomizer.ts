import { IllegalArgumentError } from "../../error/IllegalArgumentError";
import { MuscleGroup } from "../types/MuscleGroup";
import { RandomList } from "./randomList/RandomList";

export class MuscleGroupRandomizer {
  private randomList: RandomList;

  constructor(numberElements: number) {
    this.randomList = new RandomList(numberElements);
  }

  next(): MuscleGroup {
    switch (this.randomList.pick().index) {
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
          `Error while picking next muscle group from ${MuscleGroupRandomizer.name}. This requested muscle group is not supported.`
        );
    }
  }
}
