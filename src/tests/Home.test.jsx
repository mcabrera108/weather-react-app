import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("Renders Home without any api calls made", () => {
    const container = render(<Home />);
    expect(container).toMatchSnapshot();
  });
  it("Renders input search bar when Home Component is rendered", () => {
    const container = render(<Home />);
    expect(container.getByPlaceholderText(/Search/)).toHaveAttribute(
      "placeholder",
      "Search for a location..."
    );
  });
  it("Renders correct icon from the React Icons Library", () => {
    const container = render(<Home />);
    const svgSelector = container.getByTitle("magnifyingglass");
    expect(svgSelector).toBeInTheDocument();
  });
});
