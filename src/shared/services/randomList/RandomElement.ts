import { RandomList } from "./RandomList";

export class RandomElement {
  private _pickedTimes = 0;

  constructor(
    private readonly factor: number,
    readonly index: number,
    private readonly randomList: RandomList,
    private readonly predecessor?: RandomElement
  ) {}

  get min(): number {
    return this.predecessor ? this.predecessor.max + 1 : 1;
  }

  get max(): number {
    return this.min + this.probabilityValue - 1;
  }

  onPick() {
    this._pickedTimes++;
  }

  get pickedTimes(): number {
    return this._pickedTimes;
  }

  get probability(): number {
    // If the element wasn't picked yet, its probability is given from the probability list
    if (this.pickedTimes === 0) {
      return 0;
    }

    if (this.pickedTimes === 1) {
      return 10;
    }

    return 5;
  }

  get probabilityValue(): number {
    let probability = this.probability;
    if (probability === 0) {
      probability = this.randomList.getElementProbability();
    }
    return (probability / 100) * this.factor;
  }

  resetPickedTimes() {
    this._pickedTimes = 0;
  }
}
