import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("should increment value", () => {
    const state: CounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 6,
    });
  });
  test("should decrement value", () => {
    const state: CounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 4,
    });
  });
  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
