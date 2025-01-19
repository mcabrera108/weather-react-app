import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import DataModule from "../components/ui/DataModule";
import weather from "../test_data/mock_data/weather_mock";

describe("Data Module Component", () => {
  it("Render Correct Mock Data with Component if isFahrenheit Component is true", () => {
    const container = render(
      <DataModule weather={weather} isFahrenheit={true} />
    );
    expect(container.getByText(/Dewpoint/).textContent).toBe(`Dewpoint °F: 10`);
    expect(container.getByText(/Wind Speed/).textContent).toBe(
      `Wind Speed mph: 30`
    );
    expect(container.getByText(/Gust Speed/).textContent).toBe(
      `Gust Speed mph: 50`
    );
    expect(container.getByText(/Heat Index/).textContent).toBe(
      `Heat Index  °F: 70`
    );
    expect(container.getByText(/Precipitation/).textContent).toBe(
      `Precipitation  (in): 90`
    );
    expect(container.getByText(/Pressure/).textContent).toBe(
      `Pressure  (in): 110`
    );
  });

  it("Renders Correct Mock Data with Component if isFahrenheit Component is set to False", () => {
    const container = render(
      <DataModule weather={weather} isFahrenheit={false} />
    );
    expect(container.getByText(/Dewpoint/).textContent).toBe(`Dewpoint °C: 20`);
    expect(container.getByText(/Wind Speed/).textContent).toBe(
      `Wind Speed kmp: 40`
    );
    expect(container.getByText(/Gust Speed/).textContent).toBe(
      `Gust Speed kmp: 60`
    );
    expect(container.getByText(/Heat Index/).textContent).toBe(
      `Heat Index  °C: 80`
    );
    expect(container.getByText(/Precipitation/).textContent).toBe(
      `Precipitation  (mm): 100`
    );
    expect(container.getByText(/Pressure/).textContent).toBe(
      `Pressure  (mb): 120`
    );
  });
});
