import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/ui/Footer";

describe("Footer Component", () => {
  it("Renders Footer", () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("Renders correct text inside Footer", () => {
    const container = render(<Footer />);
    expect(container.getByRole("heading").textContent).toMatch(
      "@ 2024-2025 Martin Cabrera. All rights reserved."
    );
  });
});
