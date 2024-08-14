import { render, screen } from "@testing-library/react";
import { FloatingButton } from "../../components/FloatingButton";

it("Should render the floating button", () => {
  render(
    <FloatingButton
      text="+"
      handler={() => (window.location.href = "http://localhost:5173/new")}
    />
  );
  const component = screen.getByTestId("floating-button");
  expect(component).toBeInTheDocument();
});

it("Should render the text", () => {
  render(
    <FloatingButton
      text="+"
      handler={() => (window.location.href = "http://localhost:5173/new")}
    />
  );
  const text = screen.getByTestId("floating-button");
  expect(text.textContent).toBe("+");
});

it("Should call the handler", () => {
  render(
    <FloatingButton
      text="+"
      handler={() => (window.location.href = "http://localhost:5173/new")}
    />
  );
  const button = screen.getByTestId("floating-button");
  button.click();
  expect(window.location.href).toBe("http://localhost:5173/new");
});
