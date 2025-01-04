import { screen, render } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";

describe("Button", () => {
  test("in document", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("with class clear", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
    screen.debug()
  });
});
