import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UseStatePage from "../routes/use-state";

describe("Counter", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <UseStatePage />
      </BrowserRouter>
    );

  it("should display the initial count as 1", () => {
    setup();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should increment the count by 1 when the increment button is clicked", () => {
    setup();
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    act(() => {
      incrementButton.click();
    });
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should decrement the count by 1 when the decrement button is clicked", () => {
    setup();
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    act(() => {
      decrementButton.click();
    });
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should disable the decrement button when the count is 1", () => {
    setup();
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(decrementButton).toBeDisabled();
  });

  it("should enable the decrement button when the count is greater than 1", () => {
    setup();
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    act(() => {
      incrementButton.click();
    });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(decrementButton).not.toBeDisabled();
  });
});
