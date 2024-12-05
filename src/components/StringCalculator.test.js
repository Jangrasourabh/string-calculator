import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./StringCalculator";
test("it should return 0 when the input is an empty string", () => {
    render(<StringCalculator />)
    fireEvent.change(screen.getByPlaceholderText('Enter numbers'), { target: { value: '' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Result: 0')).toBeInTheDocument();
})

test('it should return the number itself when the input is a single number', () => {
    throw new Error();
})

test('it should return the sum of two numbers separated by a comma', () => {
    throw new Error();
})

test('it should return the sum of numbers separated by newlines', () => {
    throw new Error();
})

test('it should support custom delimiters', () => {
    throw new Error();
})

test('it should throw an error for negative numbers', () => {
    throw new Error();
})

test('it should throw an error for multiple negative numbers', () => {
    throw new Error();
})