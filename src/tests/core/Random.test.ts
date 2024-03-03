import { Random } from "../../core/Random";

describe("Random", () => {
  it("returns random value for 1", () => {
    expect(Random.next(1)).toBe(1);
  });

  it("returns random value", () => {
    const value = Random.next(5);
    let inRange = true;
    if (!(value >= 1 && value <= 6)) {
      inRange = false;
    }
    expect(inRange).toBe(true);
  });

  it("returns random value in range", () => {
    const value = Random.next(3, 4);
    let inRange = true;
    if (!(value >= 3 && value <= 4)) {
      inRange = false;
    }
    expect(inRange).toBe(true);
  });
});
