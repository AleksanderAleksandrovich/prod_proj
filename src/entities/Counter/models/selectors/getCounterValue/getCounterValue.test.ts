import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: 5 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(5);
  });
});
