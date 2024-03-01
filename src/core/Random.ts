export class Random {
  static next(range: number): number {
    return Math.floor(Math.random() * range) + 1;
  }
}
