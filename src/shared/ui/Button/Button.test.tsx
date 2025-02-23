import { screen, render } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("in document", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("with class clear", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
