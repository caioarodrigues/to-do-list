import { screen, render } from "@testing-library/react";
import { SideMenu } from "../../components/SideMenu";

it("Should render the side menu", () => {
  render(<SideMenu />);
  const component = screen.getByTestId("side-menu");
  expect(component).toBeInTheDocument();
});

it("Should render the new task header", () => {
  render(<SideMenu />);
  const header = screen.getByText("New task");
  expect(header).toBeInTheDocument();
});

it("Should render the title input", () => {
  render(<SideMenu />);
  const title = screen.getByPlaceholderText("Title");
  expect(title).toBeInTheDocument();
});

it("Should render the description input", () => {
  render(<SideMenu />);
  const description = screen.getByPlaceholderText("Add a description");
  expect(description).toBeInTheDocument();
});

it("Should render the label for due date input", () => {
  render(<SideMenu />);
  const dueDate = screen.getByLabelText("Set a due date");
  expect(dueDate).toBeInTheDocument();
});

it("Should render the due date input", () => {
  render(<SideMenu />);
  const date = screen.getByTestId("due-date-input");
  expect(date).toBeInTheDocument();
});

it("Should render the submit button", () => {
  render(<SideMenu />);
  const button = screen.getByTestId("submit-button");
  expect(button).toBeInTheDocument();
});