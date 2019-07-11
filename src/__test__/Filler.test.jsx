import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Filler from "../components/Filler";

describe("TodoList", () => {
  it("renders", () => {
    render(<Filler />);
  });
  it("render with props", () => {
    const { container, rerender } = render(<Filler percentage={20} />);

    const percentageValue = getByTestId(container, "percentvalue");
    expect(percentageValue.textContent).toBe("20%");

    // re-render the same component with different props
    rerender(<Filler percentage={100} />);
    expect(percentageValue.textContent).toBe("100%");
  });
});
