import { Random } from "../../../core/Random";
import { repeat } from "../../../core/repeat";
import { RandomElement } from "./RandomElement";

export class RandomList {
  private readonly factor = 1000;
  private readonly elements: RandomElement[];

  constructor(private readonly numberElements: number) {
    this.elements = this.setupElements(numberElements);
  }

  pick(): RandomElement {
    // The probability to pick an element is decreased with each pick.
    // As long as there are elements which are not picked yet, they share the rest of the probability.
    // But if the number of picks is greater than the number of elements, there is a chance, that each element was already picked and so the probability of each element is decreased.
    // This means finally we couldn't find any element.
    // Example: 5 elements, each was picked already, so each has now a probability of 10%. In sum 50%. This means for the last 50% we have to elements which cover these 50%.
    // So reset picks, if everybody was picked at least once
    if (this.wasEachPickedOnce()) {
      this.resetPick();
    }

    const rangeValue = Random.next(this.factor);
    const element = this.findByRangeValue(rangeValue);
    element.onPick();
    return element;
  }

  getElementProbability(): number {
    // sum all probabilities
    // those who are not picked yet, have probability 0, count
    // count number elements with a probability
    let countElementsWithProbability = 0;
    let sumProbability = 0;

    this.elements.forEach((element) => {
      const probability = element.probability;
      if (probability > 0) {
        sumProbability += probability;
        countElementsWithProbability++;
      }
    });

    // Calculate probability for elements, which are not picked yet
    // Example: we have two picked elements. First has a probability of 10, second 5
    // so we have 15% for both rest is 85% for all other elements (number elements - element with probability)
    const countElementsWithoutProbability =
      this.numberElements - countElementsWithProbability;
    const probability =
      (100 - sumProbability) / countElementsWithoutProbability;
    return probability;
  }

  private findByRangeValue(rangeValue: number): RandomElement {
    for (const element of this.elements) {
      if (rangeValue >= element.min && rangeValue <= element.max) {
        return element;
      }
    }

    throw new Error(`No element found in range for range value ${rangeValue}`);
  }

  private setupElements(numberElements: number) {
    let predecessor: RandomElement | undefined = undefined;
    const elements: RandomElement[] = [];
    repeat(numberElements, (index) => {
      const element = new RandomElement(this.factor, index, this, predecessor);
      predecessor = element;
      elements.push(element);
    });
    return elements;
  }

  private wasEachPickedOnce(): boolean {
    for (const element of this.elements) {
      if (element.pickedTimes === 0) {
        return false;
      }
    }
    return true;
  }

  private resetPick() {
    for (const element of this.elements) {
      element.resetPickedTimes();
    }
  }
}
