import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("in document", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("test toggle", () => {
    componentRender(<Sidebar />);
    const btn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(btn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
