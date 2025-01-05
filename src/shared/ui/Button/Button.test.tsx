import { screen, render } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("in document", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("with class clear", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
