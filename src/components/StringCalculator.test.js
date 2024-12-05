import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./StringCalculator";
test("it should return 0 when the input is an empty string", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 0")).toBeInTheDocument();
});

test("it should return the number itself when the input is a single number", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "1" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 1")).toBeInTheDocument();
});

test("it should return the sum of two numbers separated by a comma", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "1,5" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 6")).toBeInTheDocument();
});

test("it should return the sum of numbers separated by newlines", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "1\n2,3" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 6")).toBeInTheDocument();
});

test("it should support custom delimiters", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "//;\n1;2" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 3")).toBeInTheDocument();
});

test("it should throw an error for negative numbers", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "1,-2,3" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(
    screen.getByText("negative numbers not allowed -2")
  ).toBeInTheDocument();
});

test("it should throw an error for multiple negative numbers", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "1,-2,-3" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(
    screen.getByText("negative numbers not allowed -2,-3")
  ).toBeInTheDocument();
});
