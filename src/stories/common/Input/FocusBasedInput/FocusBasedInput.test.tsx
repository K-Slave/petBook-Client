import { render, fireEvent } from "@testing-library/react";
import FocusBasedInput from "./FocusBasedInput";
import React, { useState } from "react";
import renderer from "react-test-renderer";

const TestComponent = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <FocusBasedInput
      type="text"
      value={value}
      onChange={onChange}
      bgUrl=""
      bgHeight=""
      bgWidth=""
    />
  );
};

describe("FocusBasedInput", () => {
  it("should render without errors", () => {
    const { container } = render(<TestComponent />);

    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<TestComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('adds "valid" class on blur if input is valid', () => {
    render(<TestComponent />);
    const input = document.querySelector("input");

    // Fire blur event
    fireEvent.blur(input!);
    expect(input).toHaveClass("valid");
  });

  test('adds "invalid" class on blur if input is invalid', () => {
    render(<TestComponent />);
    const input = document.querySelector("input");

    // Make input invalid
    input!.setCustomValidity("Invalid");

    // Fire blur event
    fireEvent.blur(input!);
    expect(input).toHaveClass("invalid");
  });

  test('removes "valid" and "invalid" classes on focus', () => {
    render(<TestComponent />);
    const input = document.querySelector("input");

    // Add valid and invalid classes
    input!.classList.add("valid");
    input!.classList.add("invalid");

    // Fire focus event
    fireEvent.focus(input!);
    expect(input).not.toHaveClass("valid");
    expect(input).not.toHaveClass("invalid");
  });
});
