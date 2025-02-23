import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter", () => {
    const state: Partial<StateSchema> = {
      counter: { value: 5 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 5 });
  });
});
