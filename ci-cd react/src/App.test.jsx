import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render a counter display", () => {
    render(<App />);
    const counterButton = screen.getByRole("button", { name: /count is/i });
    expect(counterButton).toBeInTheDocument();
  });

  it("should render a button with initial count of 0", () => {
    render(<App />);
    const counterButton = screen.getByRole("button", { name: /count is 0/i });
    expect(counterButton).toBeInTheDocument();
  });

  it("should increment counter when button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const counterButton = screen.getByRole("button", { name: /count is 0/i });
    await user.click(counterButton);

    const updatedButton = screen.getByRole("button", { name: /count is 1/i });
    expect(updatedButton).toBeInTheDocument();
  });
});
