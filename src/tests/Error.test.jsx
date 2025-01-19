import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Error from "../pages/Error";

describe("Error Component", () => {
  it("Renders Error Component", () => {
    const container = render(<Error />);
    expect(container).toMatchSnapshot();
  });

  it("Renders correct message when user visits error url", () => {
    const container = render(<Error />);
    expect(container.getByRole("heading").textContent).toMatch("404 Not Found");
  });
});
