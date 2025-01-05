import { classNames } from "./classNames";

describe("classNames", () => {
  test("with one prop", () => {
    expect(classNames("some_class")).toBe("some_class");
  });
  test("with additional", () => {
    const expected = "some_class class1 class2";
    expect(classNames("some_class", {}, ["class1", "class2"])).toBe(expected);
  });
  test("with mods", () => {
    const expected = "some_class class1 class2 hovered canceled";
    expect(
      classNames("some_class", { hovered: true, canceled: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
  test("with mods", () => {
    const expected = "some_class class1 class2 canceled";
    expect(
      classNames("some_class", { hovered: false, canceled: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
  test("with undefined", () => {
    const expected = "some_class class1 class2 hovered";
    expect(
      classNames("some_class", { hovered: true, canceled: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
