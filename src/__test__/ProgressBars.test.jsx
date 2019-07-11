import React from "react";
import { mount } from "enzyme";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ProgressBar from "../containers/ProgressBar";
import Filler from "../components/Filler";

describe("TodoList", () => {
  it("renders", () => {
    mount(<ProgressBar />);
  });

  it("progress bars should render with default values", () => {
    const wrapper = mount(<ProgressBar />);
    expect(wrapper.find(Filler)).toHaveLength(4);
  });

  it("Buttons bars should render with default values", () => {
    const wrapper = mount(<ProgressBar />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("check value update", () => {
    const { container } = render(<ProgressBar />);
    const button = getByTestId(container, "button0");
    fireEvent.click(button);
    expect(button.firstChild.textContent).toBe("1");
  });
});
