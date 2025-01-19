import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Header from "../components/ui/Header";

describe("Header Component", () => {
  it("Renders Header", () => {
    const container = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("Renders correct icon from the Weather Icons Library", () => {
    const container = render(<Header />);
    const svgSelector = container.getByTitle("sun");
    expect(svgSelector).toBeInTheDocument();
  });
  it("Renders Correc text inside Header", () => {
    const container = render(<Header />).getByText("Weather", { exact: false });
    expect(container.textContent).toEqual("Weather App");
  });
});
