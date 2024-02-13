import { style } from "../../core/style";

describe("style", () => {
  it("returned styles", () => {
    const className = style("first", "second");
    expect(className).toBe("first second");
  });

  it("skips undefined styles", () => {
    const className = style("first", undefined, "second");
    expect(className).toBe("first  second");
  });
});
