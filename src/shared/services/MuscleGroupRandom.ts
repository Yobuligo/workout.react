import { IllegalArgumentError } from "../../error/IllegalArgumentError";
import { MuscleGroup } from "../types/MuscleGroup";
import { RandomList } from "./randomList/RandomList";

export class MuscleGroupRandom {
  private randomList: RandomList;

  constructor(numberElements: number) {
    this.randomList = new RandomList(numberElements);
  }

  next(): MuscleGroup {
    switch (this.randomList.pick().index) {
      case 0:
        return MuscleGroup.ARMS;
      case 1:
        return MuscleGroup.BACK;
      case 2:
        return MuscleGroup.CORE;
      case 3:
        return MuscleGroup.FULL_BODY;
      case 4:
        return MuscleGroup.LEGS;
      default:
        throw new IllegalArgumentError(
          `Error while picking next muscle group from ${MuscleGroupRandom.name}. This requested muscle group is not supported.`
        );
    }
  }
}
