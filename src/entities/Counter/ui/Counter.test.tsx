import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("counter-val")).toHaveTextContent("10");
  });
  test("test increment button", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId("incr-btn"));
    expect(screen.getByTestId("counter-val")).toHaveTextContent("11");
  });
  test("test decrement button", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId("decr-btn"));
    expect(screen.getByTestId("counter-val")).toHaveTextContent("9");
  });
});
