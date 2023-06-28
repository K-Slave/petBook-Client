import { render } from "@testing-library/react";
import HelperText from "./HelperText";
import React from "react";

describe("HelperText", () => {
  it('does not render anything when status is not "error"', () => {
    const { container } = render(<HelperText status="idle" message={{}} />);
    expect(container.textContent).toBe("");
  });

  it('renders error message when status is "error"', () => {
    const message = "This is an error message.";
    const { getByText } = render(
      <HelperText
        status="error"
        message={{
          error: message,
        }}
      />
    );
    expect(getByText(message)).toBeInTheDocument();
  });
});
